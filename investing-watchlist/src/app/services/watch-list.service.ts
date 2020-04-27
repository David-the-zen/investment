import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor() { }

  getWatchlist() {
    return [
      {
        stockTicker: 'TSLA',
        company: 'Tesla',
        price: 700,
        completed: false,
      },
      {
        stockTicker: 'GOOGL',
        company: 'Google',
        price: 800,
        completed: true,
      },
      {
        stockTicker: 'MSFT',
        company: 'Microsoft',
        price: 500,
        completed: false,
      },
    ]
  }
}
