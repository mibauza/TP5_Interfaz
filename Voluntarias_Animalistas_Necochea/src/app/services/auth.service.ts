import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Valor hardcodeado para indicar si el usuario está logueado
  private isLoggedIn: boolean = false;

  // Datos de usuario hardcodeados
  private validUser = 'interfaces@promocion.com';  // Asegúrate de que este sea un correo electrónico válido
  private validPassword = '1234';

  constructor() {}

  // Método para simular un login (hardcodeado) con usuario y contraseña
  login(username: string, password: string): boolean {
    if (username === this.validUser && password === this.validPassword) {
      this.isLoggedIn = true;
      return true; // Login exitoso
    }
    return false; // Login fallido
}


  // Método para simular un logout (hardcodeado)
  logout() {
    this.isLoggedIn = false;
  }

  // Método para verificar si el usuario está logueado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
