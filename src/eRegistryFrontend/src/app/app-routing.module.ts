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
  { path: 'classes', component: BrowseClassesComponent, canActivate: [AuthGuard] },
  { path: 'classes/new', component: AddNewClassComponent, canActivate: [AuthGuard] },
  { path: 'classes/details/:id', component: AddNewClassComponent, canActivate: [AuthGuard] },
  { path: 'users', component: BrowseUsersComponent, canActivate: [AuthGuard] },
  { path: 'users/new', component: AddNewUserComponent, canActivate: [AuthGuard] },
  { path: 'users/details/:id', component: AddNewUserComponent, canActivate: [AuthGuard] },
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
