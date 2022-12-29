import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  constructor(private employeeService: EmployeeService){}
  @Input()
  employee!: Employee;
  @Input()
  empIndex!: number;
  @Input()
  mode!: string;
  @Output() editDisabled = new EventEmitter<boolean>();
  
  today = new Date();
  titles: string[] = [];
  
  ngOnInit(){
    this.titles = this.employeeService.getTitles();
    if(!this.employee){
      this.employee = {
        name: '',
        title: '',
        age: 30,  //default value for age
        startDate: this.today,  //default start date set to today
        endDate: null
      }
    }
  }

  saveEmployeeInfo(employeeForm: NgForm){
    if(employeeForm.status === 'VALID'){
      this.editDisabled.emit(true);
      if(this.mode === 'edit'){
        this.employeeService.updateEmployee(employeeForm.value, this.empIndex)
      }
      else{
        this.employeeService.addEmployee(employeeForm.value);
      }
    }
  }

  onCancel(){
    this.editDisabled.emit(true);
  }
}
