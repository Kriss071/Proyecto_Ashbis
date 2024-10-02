import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule],
	templateUrl: './register.component.html',
	styleUrl: './register.component.css'
})
export class RegisterComponent {
	// name: string = '';
	// lastName: string = '';
	// phone: number = 0;
	// direction: string = '';
	// region: string = '';
	// email: string = '';
	// password: string = '';
	// confirmPassword: string = '';

	constructor(private authSvc: AuthService) { }

	registerForm = new FormGroup({
		email: new FormControl<string>('', [Validators.required, Validators.email]),
		password: new FormControl<string>('', [Validators.required])
	})

	onSubmit() {
		const email = this.registerForm.value.email;
		const password = this.registerForm.value.password;

		if (email && password){
			this.authSvc.register(email, password).subscribe({
				next: (response) => {
					console.log('Usuario registrado (Angular): ' + response);
				},
				error: (error) => {
					console.error('Error al registrar usuario (Angular): ' + error)
				}
			})
		}
			
	}
}
