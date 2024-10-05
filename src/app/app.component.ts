import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesEx';
  nums=[24,6,98,83,55]
  name1="";
  names:String []=[];
   age1: any;
   location1: any;
  addList(){
    this.names.push(this.name1);
  }

  name:String;
  age:number;
  location:String;

  emp : Employee;
  emps : Employee[]=[];

  submitEmp(){
  this.emp= new Employee(this.name,this.age,this.location);
    this.emps.push(this.emp);
    console.log(this.emps);
  
  }

  pushEmp(){
    this.emps.push(this.emp);
   
  }

  isvisible=true;
  hideList(){
    this.isvisible=!this.isvisible;
  }

  isshow=true;
  show(){
    this.isshow=!this.isshow;
  }

  day=0;

dy=false;
days(){
  this.dy=!this.dy;
}
arr=["John","Sam","Joy"];



}
