import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public isAuthenticated() {
    return this.authService.loggedUserValue ? true : false;
  }
}
