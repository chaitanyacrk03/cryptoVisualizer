import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CryptoCallService } from '../crypto-call.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    constructor(private cryptoService: CryptoCallService){

    }
  cryptoData:{
    "id":Number,
    "name": String,
    "symbol": String,
    "time": String,
    "image": String,
    "price":Number,
    "net_profit_loss":Number
  }[]=[];
  ngOnInit(): void {
    setInterval(()=>{
      
    })
    this.getCryptoData()
  }
   getCryptoData(){
     axios.get("http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response)=>{
        let id=0
        response.data.forEach((data: {
          id: any;
            current_price: Number;
            market_cap_change_24h: any;
             name: any; symbol: any; last_updated: any; image: any; 
})=>{
            id+=1
            this.cryptoService.crypt.next({
                cryptId:data.id,
                id:id,
                name:data.name,
                symbol:data.symbol,
                time:data.last_updated,
                image:data.image,
                current_price:data.current_price,
                net_profit_loss:data.market_cap_change_24h
            })
        })
    })
    .catch()
  }

  

}
