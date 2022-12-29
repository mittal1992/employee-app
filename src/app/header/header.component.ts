import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  add = false;

  addEmployee(){
    this.add = true;
  }

  hideEmployeeAdd(){
    this.add = false;
  }
}
