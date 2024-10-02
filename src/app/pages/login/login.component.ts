import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {

	constructor(public authSvc: AuthService) { }

	loginForm = new FormGroup({
		email: new FormControl<string>('', [Validators.required, Validators.email]),
		password: new FormControl<string>('', [Validators.required])
	})

	onSubmit() {
		const email = this.loginForm.value.email;
		const password = this.loginForm.value.password;

		if (email && password) {
			this.authSvc.login(email, password).subscribe({
				next: (response) => {
					console.log('Sesión iniciada (Angular): ' + response);
				},
				error: (error) => {
					console.error('Error al iniciar sesión (Angular): ' + error)
				}
			})
		}
	}

}
