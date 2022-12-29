import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(private employeeService: EmployeeService){}
  titles = [
    'Manager', 'Associate', 'Director', 'CEO', 'HR'
  ];
  filterEmployees(filterForm: NgForm){
    this.employeeService.filterEmployee(filterForm.value);
  }
  onCancel(filterForm: NgForm){
    filterForm.form.reset();
    this.employeeService.filterEmployee(filterForm.value);
  }
}
