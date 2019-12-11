var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"OverviewComponent","canActivate":["AuthGuard"]},{"path":"login","component":"LoginComponent"},{"path":"classes","component":"BrowseClassesComponent","canActivate":["AuthGuard"]},{"path":"classes/new","component":"AddNewClassComponent","canActivate":["AuthGuard"]},{"path":"classes/details/:id","component":"AddNewClassComponent","canActivate":["AuthGuard"]},{"path":"users","component":"BrowseUsersComponent","canActivate":["AuthGuard"]},{"path":"users/new","component":"AddNewUserComponent","canActivate":["AuthGuard"]},{"path":"users/details/:id","component":"AddNewUserComponent","canActivate":["AuthGuard"]},{"path":"teacher","component":"TeacherOverviewComponent","canActivate":["AuthGuard"]},{"path":"grades/user/:id","component":"StudentViewComponent","canActivate":["AuthGuard"]},{"path":"grades/course/:id","component":"BrowseClassGradesComponent","canActivate":["AuthGuard"]},{"path":"**","redirectTo":"/"}],"kind":"module"}]}
