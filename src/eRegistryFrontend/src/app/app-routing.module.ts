import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AuthGuard } from './guards/auth.guard';
import { AddNewClassComponent } from './components/add-new-class/add-new-class.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { BrowseUsersComponent } from './components/browse-users/browse-users.component';
import { BrowseClassesComponent } from './components/browse-classes/browse-classes.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'classes', component: BrowseClassesComponent },
  { path: 'classes/new', component: AddNewClassComponent },
  { path: 'classes/details/:id', component: AddNewClassComponent },
  { path: 'users', component: BrowseUsersComponent },
  { path: 'users/new', component: AddNewUserComponent },
  { path: 'users/details/:id', component: AddNewUserComponent },
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
