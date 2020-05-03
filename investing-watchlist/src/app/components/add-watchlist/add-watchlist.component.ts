import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-watchlist',
  templateUrl: './add-watchlist.component.html',
  styleUrls: ['./add-watchlist.component.scss']
})
export class AddWatchlistComponent implements OnInit {
  @Output() addWatchlist: EventEmitter<any> = new EventEmitter;

  stockTicker:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const watchlist = {
      stockTicker: this.stockTicker,
      completed: false
    }
    this.addWatchlist.emit(watchlist)
  }
}
