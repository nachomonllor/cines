import { CineService } from '../cine.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Cine } from '../cine.model';
@Component({
  selector: 'app-cine-alta',
  templateUrl: './cine-alta.component.html',
  styleUrls: ['./cine-alta.component.scss']
})
export class CineAltaComponent implements OnInit {
  form: FormGroup;
  constructor(public _cineService: CineService) {
    this.form = new FormGroup({
      nombre: new FormControl(null,  Validators.required),
      foto: new FormControl(null, Validators.required),
      paisOrigen: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this._cineService.altaCine(this.createCine());
    this.form.reset();
    Swal.fire('Atención', 'El cine ha sido guardada', 'success');
  }
  createCine(){
    const cine: Cine = {
      id: 0,
      nombre: this.form.value.nombre,
      paisOrigen: this.form.value.paisOrigen,
      foto: this.form.value.foto
    };
    return cine;
  }
}
