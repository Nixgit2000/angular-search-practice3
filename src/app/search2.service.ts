import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Search2Service {
public searchText = 'star'

  searchTextFn() {
    this.searchText
  }

}
