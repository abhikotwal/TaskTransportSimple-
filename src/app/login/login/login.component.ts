import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  
    this.signupForm = this.fb.group(
      {
        username: ["", Validators.required],
        password: ["", Validators.required],
      


       
      }
    );
  }


  onSubmit() {
    if (this.signupForm.invalid) {

      alert('All fields are mandatory')
      return;
    }

if(this.signupForm.value.username == 'User1' && this.signupForm.value.password == 'ShopBridge1' )
{
  this.router.navigate(['page/Common/List']);
  sessionStorage.setItem('Islogin','true')
}
else{
  sessionStorage.setItem('Islogin','false')
  alert('Please enter valid UserName Pasword')
      return;
}



    
  }
}
