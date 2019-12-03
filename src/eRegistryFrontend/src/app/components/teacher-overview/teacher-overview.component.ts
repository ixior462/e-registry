import { Component, OnInit } from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {AddGradeComponent} from '../add-grade/add-grade.component';

@Component({
  selector: 'app-teacher-overview',
  templateUrl: './teacher-overview.component.html',
  styleUrls: ['./teacher-overview.component.css']
})
export class TeacherOverviewComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
    this.modalService.showComponent(AddGradeComponent, { name: 'Wudoe' });
  }

}
