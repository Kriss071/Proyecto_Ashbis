import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public authSvc: AuthService){}

  login(event: Event) {
    event.preventDefault()
    const user = { email: this.email, password: this.password };
    this.authSvc.login(user).subscribe((data) => {
      console.log(data);
    });
  }

}
