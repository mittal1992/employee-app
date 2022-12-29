import { Component, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(private employeeService: EmployeeService){}
  edit = false;
  @Input()
  employee!: Employee;

  @Input()
  index!: number;

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.index);
  }

  editEmployee(){
    this.edit = true;
  }

  hideEmployeeEdit(){
    this.edit = false;
  }

}
