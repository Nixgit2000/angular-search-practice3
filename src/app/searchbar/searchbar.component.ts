import { Component } from '@angular/core';
import { SearchService } from '../search.service'
import { Search2Service } from '../search2.service'
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
 
  

  constructor(public searching: SearchService, public searching2: Search2Service) {}

 searchTextFn() {
    this.searching2.searchTextFn()
  }
 

  allMoviesFn() {
    this.searching.allMoviesFn()
  }
  fantasyFn() {
    this.searching.fantasyFn()
  }
  actionFn() {
    this.searching.actionFn()
  }
  sciFiFn() {
    this.searching.sciFiFn()
  }
  comicBookFn() {
    this.searching.comicBookFn()
  }
  horrorFn() {
    this.searching.horrorFn()
  }
  criticallyAcclaimedFn() {
    this.searching.criticallyAcclaimedFn()
  }


}
