import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input()
  placeholder: string;
  searchBar = new FormControl();
  @Output()find: EventEmitter<string>;
  constructor() {this.find = new EventEmitter<string>(); }

  ngOnInit(): void {
  }

  public searchPerson(queryString: string): void{
    this.searchBar.valueChanges.pipe((debounceTime(50))).subscribe((query) => {
      console.log('query:', query);
      this.find.emit(query);
    });
}
}
