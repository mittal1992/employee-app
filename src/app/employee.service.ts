import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './model/employee.model';
import { Filter } from './model/filter.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees: Employee[] = [
    {
      name: 'John Doe',
      title: 'Manager',
      age: 35,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2022-10-10')
    },
    {
      name: 'Jane Doe',
      title: 'Manager',
      age: 30,
      startDate: new Date('01/01/2022'),
      endDate: null
    }
  ];

  employeeSubject = new BehaviorSubject(this.employees);

  getEmployees(){
    return this.employees;
  }

  addEmployee(employee: Employee){
    this.employees.push(employee);
    this.employeeSubject.next(this.employees);
  }

  getEmployee(employeeIndex: number){
    if(this.employees && this.employees.length > 0 && this.employees[employeeIndex]){
      return this.employees[employeeIndex];
    }
    else{
      return null;
    }
  }

  deleteEmployee(employeeIndex: number){
    if(employeeIndex > -1 && this.employees && this.employees.length > 1 && this.employees[employeeIndex]){
      this.employees.splice(employeeIndex, 1);
      this.employeeSubject.next(this.employees);
      return true;
    }
    else{
      return false;
    }
  }

  updateEmployee(employee: Employee, employeeIndex: number){
    if(employeeIndex > -1 && this.employees && this.employees.length > 1 && this.employees[employeeIndex]){
      this.employees[employeeIndex] = employee;
      this.employeeSubject.next(this.employees);
      return true;
    }
    else{
      return false;
    }
  }

  filterEmployee(filterParameters: Filter){
    let filteredEmployees: Employee[] = [];
    if(filterParameters.name){
      let name = filterParameters.name;
      this.employees.forEach(employee => {
        employee.name.toUpperCase().indexOf(name.toUpperCase()) > -1 ? filteredEmployees.push(employee) : '';
      });
    }
    else{
      filteredEmployees = this.employees;
    }
    if(filterParameters.age){
      let age = filterParameters.age;
      filteredEmployees = filteredEmployees.filter(employee =>employee.age === age);
    }
    if(filterParameters.title){
      let title = filterParameters.title;
      filteredEmployees = filteredEmployees.filter(employee =>employee.title === title );
    }
    if(filterParameters.startDate){
      let startDate = filterParameters.startDate;
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.startDate >= new Date(startDate)
      );
    }
    if(filterParameters.endDate){
      let endDate = filterParameters.endDate;
      filteredEmployees = filteredEmployees.filter(employee =>
        (employee.endDate && employee.endDate <= new Date(endDate)) || (new Date() < new Date(endDate))
      );
    }
    this.employeeSubject.next(filteredEmployees);
  }
}
