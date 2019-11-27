import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  identidad: any;

  constructor(private usersService: UsersService ) {
    this.identidad = this.usersService.getIdentidad();
    console.log(this.identidad);
  }

  ngOnInit() {}

}
