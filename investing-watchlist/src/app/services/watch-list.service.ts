import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Watchlist } from '../models/Watchlist';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  watchlistsUrl:string = 'http://localhost:3000/stocks';
  watchlistLimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  //Get watchlists
  getWatchlist():Observable<Watchlist[]> {
    return this.http.get<Watchlist[]>(`${this.watchlistsUrl}${this.watchlistLimit}`);
  }

  //Toggle complted
  toggleCompleted(watchlist: Watchlist):Observable<any> {
    const url = `${this.watchlistsUrl}/${watchlist.stockTicker}`
    return this.http.put(url, watchlist, httpOptions);
  }
}
