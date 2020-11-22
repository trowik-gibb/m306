import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchBar = new FormControl();
  @Output()find: EventEmitter<string>;
  constructor() {this.find = new EventEmitter<string>(); }

  ngOnInit(): void {
  }

  public searchPerson(queryString: string): void{
    this.searchBar.valueChanges.pipe((debounceTime(500))).subscribe((query) => {
      console.log('query:', query);
      this.find.emit(query);
    });
}
}
