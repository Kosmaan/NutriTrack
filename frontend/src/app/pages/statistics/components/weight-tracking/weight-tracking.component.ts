import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-weight-tracking',
  templateUrl: './weight-tracking.component.html',
  styleUrls: ['./weight-tracking.component.scss']
})
export class WeightTrackingComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  weights: { weight: number, date: Date }[] = [];
  weight: number = 0;
  
  public lineChartData: ChartDataset[] = [{ data: [], label: 'Weight' }];


  updateChart(): void {
    this.lineChartData[0].data = this.weights.map(item => item.weight);

  }
}
