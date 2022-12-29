import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private employeeService: EmployeeService){}
  employees: Employee[] = [];
  ngOnInit(){
    this.employeeService.employeeSubject.subscribe(
      employees => this.employees = employees
    )
  }
}
