import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../models/person";

@Component({
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {

  @Output() choosen: EventEmitter<Person>;
  @Input() person: Person;
  constructor() {this.choosen = new EventEmitter<Person>(); }

  ngOnInit(): void {
  }
  public choose(person: Person): void{
    this.choosen.emit(person);
  }

}
