import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { UserWeight } from 'src/app/models/UserWeight';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-weight-tracking',
  templateUrl: './weight-tracking.component.html',
  styleUrls: ['./weight-tracking.component.scss']
})
export class WeightTrackingComponent implements OnInit {
  inputValue!: string;
  history : UserWeight[] = [];
  constructor(private authService:AuthService){}
sendData() {
  this.authService.getUserData().subscribe( res =>
  {
    let data : UserWeight = {
      weight: Number.parseInt(this.inputValue),
      measurement_Date: new Date(),
      user_Id: res.user_id
    }
    this.authService.addUserWeight(data).subscribe(res => {
      if(res == true)
      {
        this.authService.getUserWeight().subscribe(res => {
          this.history = res;
        })
      }
    });
  }
  )
 
}
  ngOnInit(): void {
    this.authService.getUserWeight().subscribe(res => {
      this.history = res;
    })
  }
  
 
  
  public lineChartData: ChartDataset[] = [{ data: [], label: 'Weight' }];
  //public lineChartLabels: Label[] = [];

  updateChart(): void {
   // this.lineChartData[0].data = this.weights.map(item => item.weight);
    //this.lineChartLabels = this.weights.map(item => new Date(item.date).toLocaleDateString());
  }
}
