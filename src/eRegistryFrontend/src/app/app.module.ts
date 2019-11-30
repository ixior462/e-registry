import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './components/overview/overview.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { AddNewClassComponent } from './components/add-new-class/add-new-class.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { BrowseUsersComponent } from './components/browse-users/browse-users.component';
import { BrowseClassesComponent } from './components/browse-classes/browse-classes.component';
import { HelpComponent } from './components/help/help.component';

/**
 * Module that contains data about used components
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    UserViewComponent,
    AddNewClassComponent,
    AddNewUserComponent,
    BrowseUsersComponent,
    BrowseClassesComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
