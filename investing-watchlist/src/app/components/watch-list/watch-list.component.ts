import { Component, OnInit } from '@angular/core';
import { Watchlist } from '../../models/Watchlist';
import { WatchListService } from '../../services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  watchlists:Watchlist[];
  
  constructor(private watchlistService:WatchListService) { }

  ngOnInit() {
    this.watchlists = this.watchlistService.getWatchlist();
  }

}