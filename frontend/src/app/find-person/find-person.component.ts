import { Component, Inject, Input, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { FileModel } from "../models/file.interface";
import { PersonService } from "../services/personservice";
import { ShareService } from "../services/ShareService";
import { AuthService } from "../auth/auth.service";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-find-person',
  templateUrl: 'find-person.component.html',
  styleUrls: ['find-person.component.css']
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

  constructor(@Inject(AuthService) authService,
    @Inject(PersonService) personService,
    @Inject(ShareService) shareService,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService) {
    this.personService = personService;
    this.shareService = shareService;
    this.authService = authService;
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
      if (value === "error-already-shared") {
        this.toastr.error("You have already shared the file with this person.", "Action failed");
      }
      else if (value) {
        this.activeModal.close();
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
