import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export default class AdminLoginComponent {
  imageLeftSide='assets/imgs/logo/login.png';

  adminLogin!:FormGroup;
 
  constructor(private router:Router, private fb:FormBuilder){

  }

  ngOnInit(){
    this.loginFrom();
  }

  loginFrom(){
    this.adminLogin=this.fb.group({
      email:['',Validators.required],
      password:['', Validators.required]
    })
  }

  togglePasswordVisibility(){
    const passwordInput=document.getElementById('password') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text': 'password';
  }

  onLogin(){
    console.log("admin data ",this.adminLogin.value);
    
    this.router.navigate(['/dashboard']);
  }
}
