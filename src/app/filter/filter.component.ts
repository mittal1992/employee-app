import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  constructor(private employeeService: EmployeeService){}
  titles: string[] = [];

  ngOnInit(){
    this.titles = this.employeeService.getTitles();
  }

  filterEmployees(filterForm: NgForm){
    this.employeeService.filterEmployee(filterForm.value);
  }

  onCancel(filterForm: NgForm){
    filterForm.form.reset();
    this.employeeService.filterEmployee(filterForm.value);
  }
}
