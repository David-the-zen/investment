import { Component, OnInit } from '@angular/core';
import { Watchlist } from '../../models/Watchlist';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  watchlists:Watchlist[];
  
  constructor() { }

  ngOnInit(): void {
    this.watchlists = [
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