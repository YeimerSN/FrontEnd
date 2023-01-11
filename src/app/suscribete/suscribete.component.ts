import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-suscribete',
  templateUrl: './suscribete.component.html',
  styleUrls: ['./suscribete.component.css']
})
export class SuscribeteComponent implements OnInit {
  /**
   *
   */
  constructor() {
  }

  public nombre = new FormControl('', Validators.required);
  public email = new FormControl('', Validators.required);
  public tipoDocumento = new FormControl('', Validators.required);
  public documento = new FormControl('', Validators.required);
  public telefono = new FormControl('', Validators.required);
  public check = new FormControl('', Validators.required);

  public newForm = new FormGroup({
    nombre: this.nombre,
    email: this.email,
    tipoDocumento: this.tipoDocumento,
    documento: this.documento,
    telefono: this.documento,
    check: this.check
  });

  public enviar(){
    this.nombre.setValue("");
    this.email.setValue("");
    this.tipoDocumento.setValue('');
    this.documento.setValue("");
    this.telefono.setValue("");
    this.check.setValue(null);

  }


  abrirModal(){
    alert("Suscrito correctamente!");
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
