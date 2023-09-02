import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  // axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
  // .then(response=>{
  //   console.log(response.data)
  // }
  // );
  }
  title = 'cryptoVisualizer';
  //SHOW IN RUPEES AND DOLLAR BOTH
  //CREATE A MAIN PAGE WITH CURRENT PRICE AND ON CLICK OF LINK WE OPEN THE MAIN GRAPH
  //COMPARE TWO COINS
  //PAGINATION
  
}
