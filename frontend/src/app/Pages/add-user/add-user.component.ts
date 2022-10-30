import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'; 
import swal from "sweetalert2";
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  registerForm!: FormGroup;
  haveData: boolean = false;
  message: any = '';
  isMessage: boolean = false;
  passwordMessage: any = '';
  password_matched: boolean = false;
  strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  constructor(
    private fb : FormBuilder,
    private router:Router,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      DateOfBirth: new FormControl('', [Validators.required, Validators.email]),
      Province: new FormControl(''),
      Gender: new FormControl(''),
      Facilitator: new FormControl(''),
      Password: new FormControl('')
  });
  }

  fieldsWithData(): boolean{
    if((this.registerForm.value.FirstName && this.registerForm.value.LastName) && (this.registerForm.value.DateOfBirth && this.registerForm.value.Province) && (this.registerForm.value.Gender && this.registerForm.value.Facilitator) && (this.registerForm.value.Password) != "" ){
      return true;
    }
    else{
      return false;
    }
  
  }

  submit(){
    
  }

}
