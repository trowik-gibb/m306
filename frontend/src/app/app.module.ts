import "@angular/compiler";
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GroupPageComponent } from './group-page/group-page.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CreateFileuploadComponent } from './create-fileuploud/create-fileupload.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { FileComponent } from './components/file/file.component';
import { FileService } from './services/files.service';
import { FileOptionsComponent } from './file-options/file-options.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FindPersonComponent } from './find-person/find-person.component';
import { PersonComponent } from './person/person.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {PersonService} from './services/personservice';
import {MatDialogModule} from '@angular/material/dialog';
import {ShareService} from './services/ShareService';
import {ShoppingCartService} from './services/shopping-cart.service';
import { GroupService } from "./services/group-service";
import { AllFilesComponent } from "./all-files/all-files.component";

const toastrOptions = {
  timeOut: 1500,
};

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomeComponent,
    GroupPageComponent,
    LoginComponent,
    SignupComponent,
    LoginComponent,
    CreateFileuploadComponent,
    CreateGroupComponent,
    FileOptionsComponent,
    SearchBarComponent,
    FileComponent,
    ShoppingCartComponent,
    PersonComponent,
    FindPersonComponent,
    AllFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientXsrfModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(toastrOptions),
    CommonModule

  ],
  providers: [
    AuthService,
    AuthGuardService,
    FileService,
    PersonService,
    ShareService,
    FileService,
    ShoppingCartService,
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
