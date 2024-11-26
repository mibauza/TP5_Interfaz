import { Component } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(private formBuilder:FormBuilder){
  }
  
  formulario= this.formBuilder.group({
    nombre:['',Validators.required],
    email:['', Validators.required]
  })
  
  guardar() {
    console.log(this.formulario);
    }
  onSubmit() { }
  
  
}
