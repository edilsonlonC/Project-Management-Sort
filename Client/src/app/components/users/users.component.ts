import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  identidad: any;
  token: string;

  users: any = {};

  constructor(private usersService: UsersService, private homeComponent: HomeComponent) {
    this.identidad = this.usersService.getIdentidad();
    this.token = this.usersService.getToken();
   }

  ngOnInit() {
      this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },
      err => console.log(err)
    );
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.log(err)
    );
  }

  updateUser(user: any) {
    this.homeComponent.setUser(user);
  }
}
