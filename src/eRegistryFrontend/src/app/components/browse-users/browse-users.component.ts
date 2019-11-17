import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Role} from '../../domain/role';
import * as _ from 'lodash';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-browse-users',
  templateUrl: './browse-users.component.html',
  styleUrls: ['./browse-users.component.css']
})
export class BrowseUsersComponent implements OnInit {
  public usersList = [];
  public filteredUsersList = [];
  public userRole = Role;
  public userFilter = UsersFilter;
  public trashIcon = faTrash;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((result) => {
        this.userFilter.setUp(result);
        this.filteredUsersList = result;
      });
  }

  goToDetails(user: any) {
    console.log(user);
    this.router.navigate(['/users/details/' + user]);
  }

  deleteUser(deletedUserId: any) {
    this.usersList = this.usersList.filter((user) => user.login !== deletedUserId);
    this.filteredUsersList = this.filteredUsersList.filter((user) => user.login !== deletedUserId);
  }
}

class UsersFilter {
  private static arr: any[];

  public static setUp(arr: any[]) {
    UsersFilter.arr = arr;
  }

  public static filterByName(inputName: string) {
    return UsersFilter.arr.filter((item) => _.startsWith(item.name, inputName));
  }

  public static filterByLastName(inputLastName: string) {
    return UsersFilter.arr.filter((item) => _.startsWith(item.surname, inputLastName));
  }

  public static filterByRole(roleId: number) {
    return UsersFilter.arr.filter((item) => item.roleId  === roleId);
  }
}
