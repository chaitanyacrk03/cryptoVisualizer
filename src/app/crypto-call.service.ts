import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class CryptoCallService {

  constructor() { }
  getCryptoData( crypto: String){
    const response=axios.get(`https://rest.coinapi.io/v1/exchangerate/${crypto}/USD?apikey=45861E98-E13C-4C93-82AC-BB70C88BF490`)
    return response;

  }
}
