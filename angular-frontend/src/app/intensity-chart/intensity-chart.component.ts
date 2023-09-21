import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from '../services.service';
import { Chart, registerables } from 'chart.js';
//import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

Chart.register(...registerables);
@Component({
  selector: 'app-intensity-chart',
  templateUrl: './intensity-chart.component.html',
  styleUrls: ['./intensity-chart.component.scss']
})


export class IntensityChartComponent implements OnInit {
  
  constructor(private dataServices: ServicesService){

  }
  
  ngOnInit(): void {
    this.getIntensity();
    setTimeout(()=>{
      this.createSvg();
      this.drawBars(this.data);
    },5000);
    
}
  private data : any;
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}
private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.title))
  .padding(0.2);

  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 200000])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d: any) => x(d.title))
  .attr("y", (d: any) => y(d.intensity))
  .attr("width", x.bandwidth())
  .attr("height", (d: any) => Math.abs(this.height - y(d.intensity)))
  .attr("fill", "#d04a35");
}

getIntensity(){
  this.dataServices.getIntensity().subscribe((data)=>{
    this.data=data;
    console.log(data);
  });
}
}
