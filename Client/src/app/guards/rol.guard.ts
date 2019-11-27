import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsersService } from '../services/users.service';


@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate() {
    // tslint:disable-next-line:prefer-const
    let identidad = this.usersService.getIdentidad();
    // tslint:disable-next-line:prefer-const
    let token = this.usersService.getToken();

    if (identidad.Rol_Usuario_id_Rol_Usuario === 1) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
