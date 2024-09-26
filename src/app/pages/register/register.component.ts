import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { disconnect } from 'process';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  lastName: string = '';
  phone: number = 0;
  direction: string = '';
  region: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(public authSvc: AuthService){}

  register(){
    const user = {name: this.name, 
                  lastName: this.lastName,
                  phone: this.phone,
                  direction: this.direction,
                  region: this.region,
                  email: this.email,
                  password: this.password,
                  confirmPassword: this.confirmPassword
                  }
            
    this.authSvc.register(user).subscribe((data) => {
      console.log(data)
    })

  }
}
