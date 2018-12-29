import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorMessageService } from '../../common/error-message.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nations = [
    { name: 'India' },
    { name: 'USA' },
    { name: 'UK' }
  ]

  // variable to hold error message.
  signup_errmsg = { };

  signupForm: FormGroup;

  constructor(private errMsgSrvc: ErrorMessageService) { }

  ngOnInit() {

    // loading error messages.
   this.signup_errmsg = this.getErrorMessage();


    this.signupForm = new FormGroup({
      firstName: new FormControl(' ', [Validators.maxLength(20), Validators.required]),
      lastName: new FormControl(' ', [Validators.maxLength(20), Validators.required]),
      motherFullName: new FormControl('default mother name', [Validators.maxLength(20), Validators.required]),
      dob: new FormControl(null, Validators.maxLength(20)),
      nationality: new FormControl(this.nations[0].name, [Validators.maxLength(20), Validators.required]),
      gender: new FormControl({ value: 'Female', disabled: false }),
      email: new FormControl('default@xyz.com',[Validators.email, Validators.required]),
      password: new FormControl('123',[Validators.maxLength(10), Validators.required]),
      confirmPassword: new FormControl('123',[Validators.maxLength(10), Validators.required]),
      mobile: new FormControl('1234567890',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.maxLength(10), Validators.minLength(10)]),
      captcha: new FormControl('default captcha', [Validators.required]),
      agree: new FormControl('xyz'),
    });
  }

  onFormSubmit() {
    console.log(this.signupForm.value);
  }

  // loading error messages through error message service.
  getErrorMessage(){
    return this.errMsgSrvc.getErrorMessage().signup;
  }

}
