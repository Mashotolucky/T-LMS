import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      LastName:  new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit(){

  }

  get f()
  {
    return this.form.controls;
  }
  submit()
  {
    //console.log(this.form.value);
  }
  get LastName() 
  {
    return this.form.get('LastName');

  }
  get password() 
  {
    return this.form.get('password');
  }

}
