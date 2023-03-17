import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public allMoviesSearch = true
  public fantasySearch = false
  public actionSearch = false
  public sciFiSearch = false
  public comicBookSearch = false
  public horrorSearch= false
  public criticallyAcclaimedSearch = false


  allMoviesFn() {
    this.allMoviesSearch = true
    this.fantasySearch = false
    this.actionSearch = false
    this.sciFiSearch = false
    this.comicBookSearch = false
    this.horrorSearch = false
    this.criticallyAcclaimedSearch = false
  }
  fantasyFn() {
    this.allMoviesSearch = false
    this.fantasySearch = true
    this.actionSearch = false
    this.sciFiSearch = false
    this.comicBookSearch = false
    this.horrorSearch = false
    this.criticallyAcclaimedSearch = false
  }
  actionFn() {
    this.allMoviesSearch = false
    this.fantasySearch = false
    this.actionSearch = true
    this.sciFiSearch = false
    this.comicBookSearch = false
    this.horrorSearch = false
    this.criticallyAcclaimedSearch = false
  }
  sciFiFn() {
    this.allMoviesSearch = false
    this.fantasySearch = false
    this.actionSearch = false
    this.sciFiSearch = true
    this.comicBookSearch = false
    this.horrorSearch = false
    this.criticallyAcclaimedSearch = false
  }
  comicBookFn() {
    this.allMoviesSearch = false
    this.fantasySearch = false
    this.actionSearch = false
    this.sciFiSearch = false
    this.comicBookSearch = true
    this.horrorSearch = false
    this.criticallyAcclaimedSearch = false
  }
  horrorFn() {
    this.allMoviesSearch = false
    this.fantasySearch = false
    this.actionSearch = false
    this.sciFiSearch = false
    this.comicBookSearch = false
    this.horrorSearch = true
    this.criticallyAcclaimedSearch = false
  }
  criticallyAcclaimedFn() {
    this.allMoviesSearch = false
    this.fantasySearch = false
    this.actionSearch = false
    this.sciFiSearch = false
    this.comicBookSearch = false
    this.horrorSearch = false
    this.criticallyAcclaimedSearch = true
  }


}
