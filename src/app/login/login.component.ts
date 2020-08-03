import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  Password: string;
  constructor() { }

  ngOnInit(): void {
  }
  LoginUser()
  {
      if(this.username=="admin" && this.Password=="admin"){
        window.open('http://localhost:4200/retail')
      }
      else{
          alert('ID & Password Does not match');
      }
  }
  
  }
