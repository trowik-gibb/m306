import {Component, Inject, Input, OnInit} from '@angular/core';
import {Person} from '../models/person';
import {FileModel} from "../models/file.interface";
import {PersonService} from "../services/personservice";
import {ShareService} from "../services/ShareService";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-find-person',
  templateUrl: './find-person.component.html',
  styleUrls: ['./find-person.component.css']
})
export class FindPersonComponent implements OnInit {
  @Input() file: FileModel;
  persons: Array<Person> = [];
  displayedPersons: Array<Person> = [];
  personService: PersonService;
  shareService: ShareService;
  authService: AuthService;
  displayPersons: boolean;
  choosen: boolean;
  chosenPersons: Array<Person> = [];
  choosenPerson: Person;

  constructor(@Inject(AuthService) authService, @Inject(PersonService) personService, @Inject(ShareService) shareService, @Inject(MAT_DIALOG_DATA) data: FileModel) {
    this.personService = personService;
    this.shareService = shareService;
    this.authService = authService;
    this.file = data;
  }

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe((value) => {
      this.persons = value;
      if (this.persons) {
        console.log('personen geladen');
      }
    });
  }

  public shareFile(): void {
    this.shareService.shareFile(this.file, this.choosenPerson).subscribe((value) => {
      if (value) {
        console.log(value);
      }
    });
  }

  public choosed(person: Person): void {
    this.choosenPerson = person;
    this.choosen = true;
  }

  filterPerson(query: string): void {
    if (query.length > 0) {
      const persons = this.persons.filter((person) => {
        return person.id !== Number(this.authService.getAuthenticatedUser()) && (person.username.substr(0, query.length) === query ||
          person.email.substr(0, query.length) === query);
      });
      this.displayedPersons = persons;
      if (this.persons.length > 0) {
        this.displayPersons = true;
      } else {
        console.log('keine Suchergebnisse');
      }
    } else {
      this.displayPersons = false;
      this.choosen = false;
    }
  }
}
