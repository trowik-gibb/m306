import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PageTwoComponent } from './page-two/page-two.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CreateFileuploadComponent } from './create-fileuploud/create-fileupload.component';
import {FormsModule} from '@angular/forms';
import { CreateGroupComponent } from './create-group/create-group.component';
import { HttpClient } from '@angular/common/http';
import { FileComponent } from "./components/file/file.component";
import { FileService } from "./services/files.service";
import { ShoppingCartService } from "./services/shopping-cart.service";


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomeComponent,
    PageTwoComponent,
    GroupPageComponent,
    LoginComponent,
    SignupComponent,
    LoginComponent,
    CreateFileuploadComponent,
    CreateGroupComponent,
    FileComponent,
    ShoppingCartComponent
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
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [
    AuthService,
    AuthGuardService,
    FileService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
