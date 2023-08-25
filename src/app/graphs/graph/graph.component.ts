import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  dps = [{x:0,y:0}];
	chart: any;
	chartOptions = {
	  exportEnabled: true,
	  title: {
		text: "Angular Dynamic Chart"
	  },
	  data: [{
		type: "line",
		dataPoints: this.dps
	  }]
	}
	getChartInstance(chart: object) {
		this.chart = chart;
		setTimeout(this.updateChart, 1000); //Chart updated every 1 second
	}
	updateChart = () => {
		var yVal = this.dps[this.dps.length - 1].y +  Math.round(5 + Math.random() *(-5-5));
		this.dps.push({x: this.dps[this.dps.length - 1].x + 1, y: yVal});
 
		if (this.dps.length >  10 ) {
			this.dps.shift();
		}
		this.chart.render();
		setTimeout(this.updateChart, 1000)
	}	

}
