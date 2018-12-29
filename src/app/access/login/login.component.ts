import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  tempPropertyBinding:string = "piyush";
  tempInterpolation:string = "piyush interpolation";
  isDisabled:boolean=true;
  isHidden:boolean=false;

  ngOnInit() {
  }

  myFunction(radioInput){
    console.log("Event Binding in action : "+ radioInput);
    this.isHidden = radioInput;
    this.isDisabled=false;
  }

}
