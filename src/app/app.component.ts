import { Component } from '@angular/core';

import { Employee } from './models/employee';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedEmployee: Employee = new Employee();

  employeeArray: Employee[] = [
    { id: 1, name: 'Mark', country: 'USA' },
    { id: 2, name: 'Mary', country: 'Canada' },
    { id: 3, name: 'John', country: 'USA' }
  ];

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
       this.selectedEmployee.id = this.employeeArray.length + 1;
       this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  delete(){
    if(confirm('Seguro desea eliminarlo?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

}
