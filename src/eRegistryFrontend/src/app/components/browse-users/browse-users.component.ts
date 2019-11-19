import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Role} from '../../domain/role';
import * as _ from 'lodash';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

/**
 * Component for browsing users
 * @export
 * @class BrowseUsersComponent
 * @implements {OnInit}
 */
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

  /**
   * Creates an instance of BrowseUsersComponent.
   * @param {UsersService} usersService
   * @param {Router} router
   * @memberof BrowseUsersComponent
   */
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

  /**
   * Redirects to user details
   * @param {*} user
   * @memberof BrowseUsersComponent
   */
  goToDetails(user: any) {
    console.log(user);
    this.router.navigate(['/users/details/' + user]);
  }

  /**
   * Calls UsersService to delete user
   * @param {*} deletedUserId
   * @memberof BrowseUsersComponent
   */
  deleteUser(deletedUserId: any) {
    this.usersList = this.usersList.filter((user) => user.login !== deletedUserId);
    this.filteredUsersList = this.filteredUsersList.filter((user) => user.login !== deletedUserId);
  }
}

/**
 * Class for filtering users
 * @class UsersFilter
 */
class UsersFilter {
  private static arr: any[];

  /**
   * Sets array to operate on
   * @static
   * @param {any[]} arr
   * @memberof UsersFilter
   */
  public static setUp(arr: any[]) {
    UsersFilter.arr = arr;
  }

  /**
   * Filters users list by name
   * @static
   * @param {string} inputName
   * @returns
   * @memberof UsersFilter
   */
  public static filterByName(inputName: string) {
    return UsersFilter.arr.filter((item) => _.startsWith(item.name, inputName));
  }

  /**
   * Filters users list by surname
   * @static
   * @param {string} inputLastName
   * @returns
   * @memberof UsersFilter
   */
  public static filterByLastName(inputLastName: string) {
    return UsersFilter.arr.filter((item) => _.startsWith(item.surname, inputLastName));
  }

  /**
   * Filters users list by role
   * @static
   * @param {number} roleId
   * @returns
   * @memberof UsersFilter
   */
  public static filterByRole(roleId: number) {
    return UsersFilter.arr.filter((item) => item.roleId  === roleId);
  }
}
