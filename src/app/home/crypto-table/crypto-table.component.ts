import { Component, OnInit } from '@angular/core';
import { CryptoCallService } from '../../crypto-call.service';
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
    "net_profit_loss":number
  }[]=[{id:0,name:"MyCrypto",symbol:"MCP",time:"03/10/1998",image:"none",current_price:999999,net_profit_loss:999999}]
  constructor(private csv: CryptoCallService){}

    ngOnInit(): void {
      this.csv.crypt.subscribe((data)=>{
        if (this.rows.length<101 || this.rows[data.id].current_price!=data.current_price){
          this.rows[data.id]=data
        }
      })
      console.log(this.rows)
  }
  openGraph(){
    
  }
}
