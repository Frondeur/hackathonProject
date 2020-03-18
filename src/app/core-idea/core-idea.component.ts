import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-idea',
  templateUrl: './core-idea.component.html',
  styleUrls: ['./core-idea.component.scss']
})
export class CoreIdeaComponent implements OnInit {

  title = 'Revenue (m)';
  type = 'ColumnChart';
  data = [
    ["FY'20", 0],
    ["FY'21", 0.05],
    ["FY'22", 0.3],
    ["FY'23", 0.6],
    ["FY'24", 1.5],
    ["FY'25", 1.5],
    ["FY'26", 2]
  ];
  columnNames = ['Year', 'Revenue'];
  options = {
    vAxis: {
      minValue: 0,
      title: 'Euros',
    },
    colors: ['#88d597', '#88d597'],
    isStacked: true,
    width: 500,
    height: 500
  };



  title1 = 'Expenses (m)';
  type1 = 'ColumnChart';
  data1 = [
    ["FY'20", 1],
    ["FY'21", 1],
    ["FY'22", 1.6],
    ["FY'23", 0.8],
    ["FY'24", 0.5],
    ["FY'25", 0.5],
    ["FY'26", 0.5]
  ];
  columnNames1 = ['Year', 'Expenses'];
  options1 = {
    vAxis: {
      minValue: 0,
      title: 'Euros',
    },
    colors: ['#63cac6', '#63cac6'],
    isStacked: true,
    width: 500,
    height: 500
  };


  title3 = 'Profit (m)';
  type3 = 'ColumnChart';
  data3 = [
    ["FY'20", -1],
    ["FY'21", -0.95],
    ["FY'22", -1.3],
    ["FY'23", 0.02],
    ["FY'24", 1],
    ["FY'25", 1],
    ["FY'26", 1.5]
  ];
  columnNames3 = ['Year', 'Profit'];
  options3 = {
    vAxis: {
      minValue: 0,
      title: 'Euros',
    },
    isStacked: true,
    width: 500,
    height: 500
  };
  constructor() { }

  ngOnInit() {
  }

}
