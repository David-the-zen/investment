import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Watchlist } from 'src/app/models/Watchlist';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';
import { WatchListService } from '../../services/watch-list.service';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.scss']
})
export class WatchlistItemComponent implements OnInit {
  @Input() watchlist: Watchlist;
  @Output()deleteWatchlist: EventEmitter<Watchlist> = new EventEmitter();

  constructor(private watchlistService:WatchListService) { }

  ngOnInit(): void {
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      watchlist: true,
      'is-complete': this.watchlist.completed
    }

    return classes;
  }

  onToggle(watchlist) {
    //Toggle in UI
    watchlist.completed = !watchlist.completed
    //Toggle on server
    this.watchlistService.toggleCompleted(watchlist).subscribe(watchlist =>
      console.log(watchlist));
  }

  onDelete(watchlist) {
    this.deleteWatchlist.emit(watchlist)
  }

}
