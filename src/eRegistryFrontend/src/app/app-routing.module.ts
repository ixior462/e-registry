import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AuthGuard } from './guards/auth.guard';
import { AddNewClassComponent } from './components/add-new-class/add-new-class.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { BrowseUsersComponent } from './components/browse-users/browse-users.component';
import { BrowseClassesComponent } from './components/browse-classes/browse-classes.component';
import { HelpComponent } from './components/help/help.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { TeacherOverviewComponent } from './components/teacher-overview/teacher-overview.component';
import { BrowseClassGradesComponent } from './components/browse-grades/browse-class-grades.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'classes', component: BrowseClassesComponent, canActivate: [AuthGuard] },
  { path: 'classes/new', component: AddNewClassComponent, canActivate: [AuthGuard] },
  { path: 'classes/details/:id', component: AddNewClassComponent, canActivate: [AuthGuard] },
  { path: 'users', component: BrowseUsersComponent, canActivate: [AuthGuard] },
  { path: 'users/new', component: AddNewUserComponent, canActivate: [AuthGuard] },
  { path: 'users/details/:id', component: AddNewUserComponent, canActivate: [AuthGuard] },
  { path: 'help', component: HelpComponent },
  { path: 'teacher', component: TeacherOverviewComponent, canActivate: [AuthGuard]},
  { path: 'grades/user/:id', component: StudentViewComponent, canActivate: [AuthGuard]},
  { path: 'grades/course/:id', component: BrowseClassGradesComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/'}
];

/**
 * Module that contains app routes
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
