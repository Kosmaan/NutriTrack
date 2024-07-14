import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-carousel',
  templateUrl: './review-carousel.component.html',
  styleUrls: ['./review-carousel.component.scss']
})
export class ReviewCarouselComponent implements OnInit {
  reviews = [
    { author: 'John Doe', content: '"NutriTrack made tracking my macros effortless! Perfect for my fitness goals."' },
    { author: 'Jane Smith', content: '"Love how NutriTrack simplifies my meal planning. Great tool for staying on track!"' },
    { author: 'George Johnson', content: '"Helped me shed pounds by keeping tabs on my calories. Effective and easy to use!"' },
    { author: 'Emma Brown', content: '"NutriTrack is a game-changer for my muscle gain journey. Highly recommend!"' },
  ];

  currentIndex = 0;
  totalReviews !: number;
  interval: any;

  ngOnInit() {
    this.totalReviews = this.reviews.length;
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextReview();
    }, 3000);
  }

  nextReview() {
    const prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.totalReviews;
    this.animateSlides(prevIndex, this.currentIndex);
  }

  animateSlides(prevIndex: number, nextIndex: number) {
    const reviews = document.querySelectorAll('.review') as NodeListOf<HTMLElement>;
    reviews[prevIndex].classList.remove('active');
    reviews[nextIndex].classList.add('active');
    reviews[prevIndex].classList.add('prev');
    reviews[nextIndex].classList.add('next');

    setTimeout(() => {
      reviews[prevIndex].classList.remove('prev');
      reviews[nextIndex].classList.remove('next');
    }, 1000);
  }

  goToReview(index: number) {
    if (index !== this.currentIndex) {
      const prevIndex = this.currentIndex;
      this.currentIndex = index;
      this.animateSlides(prevIndex, this.currentIndex);
      clearInterval(this.interval); // Stop auto-rotation on indicator click
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
