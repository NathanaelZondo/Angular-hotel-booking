import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  pop:any ={};
people = [];
username:string = "Nate";
password:string = "2233";
message;

saves()
{
this.people.push(this.pop)
this.pop ={}; 


if(this.people[0].name == this.username && this.people[0].pass == this.password)
{
this.message = "Successful Login"; 
 window.location.href = '/tool';
this.people.splice(0,1); 
}
else 
{
 this.message = "Login failed"; 
 this.people.splice(0,1); 
}

}
}
