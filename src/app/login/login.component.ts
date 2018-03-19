import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserLogin } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	credentials : UserLogin = {
		'email' :'',
		'name'	: '',
		'password' :''
	}



  constructor(
  	private auth : AuthenticationService,
  	private router: Router
  	) { }

  ngOnInit() {
  }

  login() {
	  this.auth.login(this.credentials).subscribe(
	  	() => {
	    	this.router.navigateByUrl('/profile');
	  	}, (err) => {
	    	console.error(err);
	  });
  }

}
