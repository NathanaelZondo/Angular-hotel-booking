import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  account = [];
  ac:any = {};

submit()
{
this.account.push(this.ac);
this.ac ={};
}




}
