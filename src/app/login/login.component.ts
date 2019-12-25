import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

import {} from 'file-system';
import { MyService } from '../myservice';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login = new Login();
  constructor(private router:Router,private myService:MyService) { }

  ngOnInit() {
    if(localStorage.getItem('loggedIn')!=null)
    {
      this.router.navigate(['/confirm']);
    }
  }

  onSubmit(form)
  {
      this.myService.addLogin(this.login.email,this.login.password).subscribe();
      localStorage.setItem('loggedIn' , 'yes');
      this.router.navigate(['/confirm']);
  }

}
