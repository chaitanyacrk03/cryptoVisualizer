import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cryptoData:{
    "name": String,
    "symbol": String,
    "usym": String,
    "gecko": String
  }[]=[];
  ngOnInit(): void {
    this.cryptoData=this.getCryptoData()
  }
  getCryptoData() {
    return [
      {
          "name": "Ethereum",
          "symbol": "ETH",
          "usym": "Ξ",
          "gecko": "ethereum"
      },
      {
          "name": "Tether",
          "symbol": "USDT",
          "usym": "₮",
          "gecko": "tether"
      },
      {
          "name": "Cardano",
          "symbol": "ADA",
          "usym": "₳",
          "gecko": "cardano"
      },
      {
          "name": "XRP",
          "symbol": "XRP",
          "usym": "✕",
          "gecko": "ripple"
      },
      {
          "name": "Solana",
          "symbol": "SOL",
          "usym": "◎",
          "gecko": "solana"
      },
      {
          "name": "Polkadot",
          "symbol": "DOT",
          "usym": "●",
          "gecko": "polkadot"
      },
      {
          "name": "Dogecoin",
          "symbol": "DOGE",
          "usym": "Ð",
          "gecko": "dogecoin"
      },
      {
          "name": "Dai",
          "symbol": "DAI",
          "usym": "◈",
          "gecko": "dai"
      },
      {
          "name": "Litecoin",
          "symbol": "LTC",
          "usym": "Ł",
          "gecko": "litecoin"
      },
      {
          "name": "Algorand",
          "symbol": "ALGO",
          "usym": "Ⱥ",
          "gecko": "algorand"
      },
      {
          "name": "Bitcoin Cash",
          "symbol": "BCH",
          "usym": "Ƀ",
          "gecko": "bitcoin-cash"
      },
      {
          "name": "ECOMI",
          "symbol": "OMI",
          "usym": "Ο",
          "gecko": "ecomi"
      },
      {
          "name": "Internet Computer",
          "symbol": "ICP",
          "usym": "∞",
          "gecko": "internet-computer"
      },
      {
          "name": "Ethereum Classic",
          "symbol": "ETC",
          "usym": "ξ",
          "gecko": "ethereum-classic"
      },
      {
          "name": "Monero",
          "symbol": "XMR",
          "usym": "ɱ",
          "gecko": "monero"
      },
      {
          "name": "Tezos",
          "symbol": "XTZ",
          "usym": "ꜩ",
          "gecko": "tezos"
      },
      {
          "name": "Iota",
          "symbol": "MIOTA",
          "usym": "ɨ",
          "gecko": "iota"
      },
      {
          "name": "EOS",
          "symbol": "EOS",
          "usym": "ε",
          "gecko": "eos"
      },
      {
          "name": "Bitcoin SV",
          "symbol": "BSV",
          "usym": "Ɓ",
          "gecko": "bitcoin-cash-sv"
      },
      {
          "name": "Maker",
          "symbol": "MKR",
          "usym": "M",
          "gecko": "maker"
      },
      {
          "name": "Zcash",
          "symbol": "ZEC",
          "usym": "ⓩ",
          "gecko": "zcash"
      },
      {
          "name": "Dash",
          "symbol": "DASH",
          "usym": "Đ",
          "gecko": "dash"
      },
      {
          "name": "Nano",
          "symbol": "XNO",
          "usym": "Ӿ",
          "gecko": "nano"
      },
      {
          "name": "Augur",
          "symbol": "REP",
          "usym": "Ɍ",
          "gecko": "augur"
      },
      {
          "name": "Steem",
          "symbol": "STEEM",
          "usym": "ȿ",
          "gecko": "steem"
      },
      {
          "name": "BNB",
          "symbol": "BNB",
          "usym": "ȿ",
          "gecko": "steem"
      },
      {
          "name": "Shiba Inu",
          "symbol": "SHIB",
          "usym": "ȿ",
          "gecko": "steem"
      },
      {
          "name": "Binance USD",
          "symbol": "BUSD",
          "usym": "ȿ",
          "gecko": "steem"
      },    {
          "name": "Ethereum Classic",
          "symbol": "ETC",
          "usym": "ȿ",
          "gecko": "steem"
      },    {
          "name": "Cronos",
          "symbol": "CRO",
          "usym": "ȿ",
          "gecko": "steem"
      },    {
          "name": "The Sandbox",
          "symbol": "SAND",
          "usym": "ȿ",
          "gecko": "steem"
      },    {
          "name": "ApeCoin",
          "symbol": "APE",
          "usym": "ȿ",
          "gecko": "steem"
      },    {
          "name": "BitTorrent",
          "symbol": "BTT",
          "usym": "ȿ",
          "gecko": "steem"
      }
  ]
  }

  

}
