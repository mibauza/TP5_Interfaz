import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Definir los controles del formulario con sus validaciones
    this.formulario = this.formBuilder.group({
      nombreApellido: ['', Validators.required],  // Campo para nombre y apellido
      email: ['', [Validators.required, Validators.email]], // Campo para email con validación de email
      whatsapp: ['', Validators.required],  // Campo para whatsapp
      consulta: ['', Validators.required]    // Campo para consulta
    });
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value); // Muestra los valores del formulario
    } else {
      console.log('Formulario inválido');
    }
  }
}
