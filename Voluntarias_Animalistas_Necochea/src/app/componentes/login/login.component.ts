import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { AuthService } from '../../services/auth.service'; // Asegúrate de importar el AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],  // Asegurarse de incluir CommonModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],  // Email con validación
      password: ['', [Validators.required, Validators.minLength(4)]],  // Contraseña con validación mínima
    });
  }

  onSubmit(): void {
    if (this.loginForm?.valid) {  // Verificación de nulidad con el operador ?.
      const { email, password } = this.loginForm.value;
      if (this.authService.login(email, password)) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Usuario o contraseña incorrectos';  // Mensaje de error
      }
    } else {
      console.log('Formulario inválido');  // Mensaje en consola si el formulario no es válido
    }
}

}
