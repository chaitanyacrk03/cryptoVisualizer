import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=45861E98-E13C-4C93-82AC-BB70C88BF490')
  .then(response=>{
    console.log(response.data)
  }
  );
  }
  title = 'cryptoVisualizer';
  //SHOW IN RUPEES AND DOLLAR BOTH
  //CREATE A MAIN PAGE WITH CURRENT PRICE AND ON CLICK OF LINK WE OPEN THE MAIN GRAPH
  //COMPARE TWO COINS
  //PAGINATION
  
}
