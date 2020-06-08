import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less']
})
export class StudentComponent implements OnInit {
  public students = [];

  constructor(private _myService: MyserviceService) { }

  ngOnInit() {
    this.students = this._myService.getStudentList();
  }

}
