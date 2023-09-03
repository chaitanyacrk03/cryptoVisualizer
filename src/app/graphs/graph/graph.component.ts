import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';
import { CryptoCallService } from 'src/app/crypto-call.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit{
	constructor(private route : ActivatedRoute,private csv : CryptoCallService){}
	id: any;
	@Input() dp=[{
		x: new Date,
		y:Number
	}];
	async ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id')
		// await axios.get(`https://api.coingecko.com/api/v3/coins/${this.id}/market_chart?vs_currency=usd&days=1`).then(
		// 	(response)=>{
		// 		for(let i of response.data.prices){
		// 			this.dp.push({x:new Date(i[0]),y:i[1]})
		// 		}
			
		// 	}
		// )
	}
	
	chart: any;
	chartOptions = {
		theme: "light2",
		animationEnabled: true,
		zoomEnabled: true,
		title: {
			text: "24 HRS DATA"
		},
		axisY: {
			labelFormatter: (e: any) => {
				var suffixes = ["", "K", "M", "B", "T"];
 
				var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
				if(order > suffixes.length - 1)
					order = suffixes.length - 1;
 
				var suffix = suffixes[order];
				return "$" + (e.value / Math.pow(1000, order)) + suffix;
			}
		},
		data: [{
			type: "line",
			xValueFormatString: "YYYY",
			yValueFormatString: "$#,###.#########",
			dataPoints: 
				this.csv.cryptData
		}]
	}	
}
