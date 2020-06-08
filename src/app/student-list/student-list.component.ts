import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less']
})
export class StudentListComponent implements OnInit {
  public students = [];

  constructor(private _myService: MyserviceService) { }

  ngOnInit() {
    this.students = this._myService.getStudentList();

  }

}
