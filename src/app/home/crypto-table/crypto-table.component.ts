import { Component, OnInit } from '@angular/core';
import { CryptoCallService } from '../../crypto-call.service';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css']
})
export class CryptoTableComponent implements OnInit{

   rows: { 
    "id":Number,
    "name": String,
    "symbol": String,
    "time": String,
    "image": String,
    "current_price":Number,
    "net_profit_loss":number,
    "cryptId":String
  }[]=[{id:0,name:"MyCrypto",symbol:"MCP",time:"03/10/1998",image:"none",current_price:999999,net_profit_loss:999999,cryptId:"myCoin"}]
  constructor(private csv: CryptoCallService,private router: Router){}

    ngOnInit(): void {
      this.csv.crypt.subscribe((data)=>{
        if (this.rows.length<101 || this.rows[data.id].current_price!=data.current_price){
          this.rows[data.id]=data
        }
      })
      console.log(this.rows)
  }
  async openGraph(cryptId: any){
    this.csv.cryptData=[]
    await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptId}/market_chart?vs_currency=usd&days=1`).then(
			(response)=>{
				for(let i of response.data.prices){
					this.csv.cryptData.push({x:new Date(i[0]),y:i[1]})
				}
			
			}
    
    )
    this.router.navigate(['charts',cryptId])
}
}
