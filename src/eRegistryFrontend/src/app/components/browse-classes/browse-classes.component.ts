import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import {ClassesService} from '../../services/classes.service';

/**
 * Component for browsing classes
 * @export
 * @class BrowseClassesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-browse-classes',
  templateUrl: './browse-classes.component.html',
  styleUrls: ['./browse-classes.component.css']
})
export class BrowseClassesComponent implements OnInit {
  public filteredClasses = [];
  public classList = [];
  public trashIcon = faTrash;

  /**
   * Creates an instance of BrowseClassesComponent.
   * @param {Router} router
   * @param {ClassesService} classesService
   * @memberof BrowseClassesComponent
   */
  constructor(
    private router: Router,
    private classesService: ClassesService
  ) { }

  ngOnInit() {
    this.classesService.getAllClasses()
      .subscribe((result) => {
        // this.classList = result;
        // this.filteredClasses = result;
      });
  }

  /**
   * Redirects to class details
   * @param {*} classItem
   * @memberof BrowseClassesComponent
   */
  goToDetails(classItem: any) {
    console.log(classItem);
    this.router.navigate(['/classes/details/' + classItem]);
  }

  /**
   * Calls ClassesService to delete class
   * @param {*} arg
   * @memberof BrowseClassesComponent
   */
  deleteClass(arg: any) {
    this.classesService.deleteClass(arg).subscribe((result) => {
      console.log('deleted ' + result);
    });
  }
}
