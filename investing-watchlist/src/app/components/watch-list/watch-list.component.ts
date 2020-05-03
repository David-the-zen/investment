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
    this.watchlistService.getWatchlist().subscribe(watchlists => {
      this.watchlists = watchlists;
    });
  }

  deleteWatchlist(watchlist:Watchlist) {
    //Remove from UI
    this.watchlists = this.watchlists.filter(t => t.stockTicker !== watchlist.stockTicker);
    //REmove from server
    this.watchlistService.deleteWatchlist(watchlist).subscribe();
  }

  addWatchlist(watchlist:Watchlist) {
    this.watchlistService.addWatchlist(watchlist).subscribe(watchlist => {
      this.watchlists.push(watchlist);
    })
  }

}