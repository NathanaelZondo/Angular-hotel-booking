import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {Route} from '@angular/router';

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
