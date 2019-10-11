import { Component, OnInit } from '@angular/core';
import { Department } from '../department.model';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  members = [];
  rez = [];
  flo:any = {};
  flo2:any = {};
  api:any ={};
  link:string = "https://images.pexels.com/photos/1145257/pexels-photo-1145257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  departments: Department[] = [
  { name: 'https://images.pexels.com/photos/1061142/pexels-photo-1061142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  { name: 'https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  { name: 'https://images.pexels.com/photos/1061140/pexels-photo-1061140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  { name: 'https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  { name: 'https://images.pexels.com/photos/1061138/pexels-photo-1061138.jpeg?cs=srgb&dl=5-chain-chrome-1061138.jpg&fm=jpg'}
  ];


  departmentss: Department[] = [
    { name: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    { name: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    { name: 'https://images.pexels.com/photos/1028379/pexels-photo-1028379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    { name: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
    { name: 'https://images.pexels.com/photos/271668/pexels-photo-271668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
    ];

    departmentsss: Department[] = [
      { name: 'https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
      { name: 'https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
      { name: 'https://images.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
      { name: 'https://images.pexels.com/photos/949406/pexels-photo-949406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
      { name: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
      ];

      departmentssss: Department[] = [
        { name: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        { name: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        { name: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        { name: 'https://images.pexels.com/photos/2029663/pexels-photo-2029663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        { name: 'https://images.pexels.com/photos/1834725/pexels-photo-1834725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
        ];

        departmentsssss: Department[] = [
          { name: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
          { name: 'https://images.pexels.com/photos/1030979/pexels-photo-1030979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
          { name: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
          { name: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
          { name: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
          ];

          departmentssssss: Department[] = [
            { name: 'https://images.pexels.com/photos/2015562/pexels-photo-2015562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            { name: 'https://images.pexels.com/photos/2290738/pexels-photo-2290738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            { name: 'https://images.pexels.com/photos/1841149/pexels-photo-1841149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            { name: 'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
            { name: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            ];

            departmentsssssss: Department[] = [
              { name: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
              { name: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
              { name: 'https://images.pexels.com/photos/1010646/pexels-photo-1010646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
              { name: 'https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
              { name: 'https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
              { name: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
              ];
  

price:string;
destination:string;
cnum:string;
anum:string;
val = 0;
aprice;
cprice;
total;
ctotal;
res1(x)
{
  console.log(x);

  this.val = x;  


  if(this.val == 0)
  {
this.link = this.departmentss[x].name;}

else if (this.val ==1)
{
  this.link = this.departmentsss[x].name;}

  else if (this.val ==2)
{
  this.link = this.departmentssss[x].name;}
  else if (this.val ==3)
{
  this.link = this.departmentsssss[x].name;}
  else if (this.val ==4)
  {
    this.link = this.departmentssssss[x].name;}
    else if (this.val ==5)
    {
      this.link = this.departmentsssssss[x].name;}
    }


enter()
{
  
this.members.push(this.flo);
this.flo ={};
console.log(this.members);
}


vc()
{
 



if(this.val==0)
{
this.cprice = 250;
this.aprice = 400;
this.total = this.members[0].days*this.cprice*this.members[0].child;
this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
this.flo2.cost = this.total + this.ctotal; 
this.price = this.flo2.cost;
this.members.splice(0,1);  
this.destination ="Cape Town";
this.anum = this.members[0].child;
this.cnum = this.members[0].child;



}
else if(this.val==1)
{
  
this.cprice = 400;
this.aprice = 750;
this.total = this.members[0].days*this.cprice*this.members[0].child;
this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
this.flo2.cost = this.total + this.ctotal; 
this.price = this.flo2.cost; 
this.members.splice(0,1);
this.destination ="Dubai"; 

}
else if(this.val==2)
{
  
this.cprice = 1000;
this.aprice = 1500;
this.total = this.members[0].days*this.cprice*this.members[0].child;
this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
this.flo2.cost = this.total + this.ctotal; 
this.price = this.flo2.cost; 
this.members.splice(0,1); 
this.destination ="Las Vegas";

}
else if(this.val==3)
{
  
this.cprice = 2500;
this.aprice = 2000;
this.total = this.members[0].days*this.cprice*this.members[0].child;
this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
this.flo2.cost = this.total + this.ctotal; 
this.price = this.flo2.cost; 
this.members.splice(0,1); 
this.destination ="Budapest";

}
else if(this.val==4)
{
  
this.cprice = 800;
this.aprice = 500;
this.total = this.members[0].days*this.cprice*this.members[0].child;
this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
this.flo2.cost = this.total + this.ctotal; 
this.price = this.flo2.cost; 
this.members.splice(0,1); 
this.destination ="Mexico";

}
else if(this.val==5)
{
 
this.cprice = 3000;
this.aprice = 2700;
this.total = this.members[0].days*this.cprice*this.members[0].child;
this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
this.flo2.cost = this.total + this.ctotal; 
this.price = this.flo2.cost; 
this.members.splice(0,1); 
this.destination ="Miami";

}



}



view(r)
{
  if(this.val == 0)
  {
this.link = this.departmentss[r].name;}

else if (this.val ==1)
{
  this.link = this.departmentsss[r].name;}

  else if (this.val ==2)
{
  this.link = this.departmentssss[r].name;}
  else if (this.val ==3)
{
  this.link = this.departmentsssss[r].name;}
  else if (this.val ==4)
  {
    this.link = this.departmentssssss[r].name;}
    else if (this.val ==5)
    {
      this.link = this.departmentsssssss[r].name;}
      else
  {
this.link = this.departmentss[r].name;}
}




save()
{
 this.rez.push(this.api);
 this.api = {}; 
}

cancel(z)
{
 this.rez.splice(z,1) 
}

}



