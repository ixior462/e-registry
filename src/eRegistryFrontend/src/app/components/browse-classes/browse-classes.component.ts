import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import {ClassesService} from '../../services/classes.service';

@Component({
  selector: 'app-browse-classes',
  templateUrl: './browse-classes.component.html',
  styleUrls: ['./browse-classes.component.css']
})
export class BrowseClassesComponent implements OnInit {
  public filteredClasses = [];
  public classList = [];
  public trashIcon = faTrash;

  constructor(
    private router: Router,
    private classesService: ClassesService
  ) { }

  ngOnInit() {
    this.classesService.getAllClasses()
      .subscribe((result) => {
        this.classList = result;
        this.filteredClasses = result;
      });
  }

  goToDetails(classItem: any) {
    console.log(classItem);
    this.router.navigate(['/classes/details/' + classItem]);
  }

  deleteClass(arg: any) {
    this.classesService.deleteClass(arg).subscribe((result) => {
      console.log('deleted ' + result);
    });
  }
}
