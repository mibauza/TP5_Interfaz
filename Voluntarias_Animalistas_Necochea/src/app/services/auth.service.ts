import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // Estado inicial en false
  isLoggedIn$ = this.isLoggedInSubject.asObservable(); // Exponemos el observable

  private validUser = 'interfaces@promocion.com'; 
  private validPassword = '1234';

  constructor() {}

  // Método para simular el login
  login(username: string, password: string): boolean {
    if (username === this.validUser && password === this.validPassword) {
      this.isLoggedInSubject.next(true); // Cambia el estado
      return true; // Login exitoso
    }
    return false;
  }

  // Método para simular el logout
  logout() {
    this.isLoggedInSubject.next(false); // Cambia el estado
  }

  // Método para obtener el estado de autenticación
  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }
}
