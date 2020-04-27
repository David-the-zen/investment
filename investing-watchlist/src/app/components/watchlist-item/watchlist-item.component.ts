import { Component, OnInit, Input } from '@angular/core';
import { Watchlist } from 'src/app/models/Watchlist';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.scss']
})
export class WatchlistItemComponent implements OnInit {
  @Input () watchlist: Watchlist;

  constructor() { }

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
    watchlist.completed = !watchlist.completed
  }

  onDelete(watchlsit) {
    console.log('delete');
  }

}
