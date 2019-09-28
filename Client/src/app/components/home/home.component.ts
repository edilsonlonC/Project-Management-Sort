import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  identidad: any;
  token: string;

  constructor(private usersService: UsersService, private router: Router) {
    this.identidad = this.usersService.getIdentidad();
    this.token = this.usersService.getToken();
   }

  ngOnInit() {
  }

  logOut() {
    localStorage.clear();
    this.identidad = null;
    this.token = null;
    this.router.navigate(['/']);
  }

}
