import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverviewComponent } from './components/overview/overview.component';
// import { UserViewComponent } from './components/user-view/user-view.component';
import { AddNewClassComponent } from './components/add-new-class/add-new-class.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { BrowseUsersComponent } from './components/browse-users/browse-users.component';
import { BrowseClassesComponent } from './components/browse-classes/browse-classes.component';
import { TeacherOverviewComponent } from './components/teacher-overview/teacher-overview.component';
import {BsModalRef, ModalModule} from 'ngx-bootstrap/modal';
import {BootstrapModalModule} from 'ngx-modialog/plugins/bootstrap';
import { AddGradeComponent } from './components/add-grade/add-grade.component';
import { HelpComponent } from './components/help/help.component';
import {
  BsModalService,
  ComponentLoaderFactory,
  ModalBackdropComponent,
  PositioningService,
  TooltipConfig,
  TooltipModule
} from 'ngx-bootstrap';
import { StudentViewComponent } from './components/student-view/student-view.component';
import {BrowseClassGradesComponent} from './components/browse-grades/browse-class-grades.component';

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
    AddNewClassComponent,
    AddNewUserComponent,
    BrowseUsersComponent,
    BrowseClassesComponent,
    TeacherOverviewComponent,
    AddGradeComponent,
    HelpComponent,
    StudentViewComponent,
    BrowseClassGradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    TooltipModule,
  ],
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    BsModalRef,
    TooltipConfig
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddGradeComponent]
})
export class AppModule { }
