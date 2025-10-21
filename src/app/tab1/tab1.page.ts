import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  form: any;

  constructor(private fb: FormBuilder, 
    private productosService:ProductosService,
    private alertController:AlertController) {}

    ngOnInit(){
      this.crearFormulario();
    }
    crearFormulario(){
      this.form = this.fb.group({
        codigo:['', Validators.required],
        descripcion:['', Validators.required],
        valor_unitario: ['', Validators.required],
        unidad_medida: ['', Validators.required],
        cantidad_stock: ['', Validators.required],
        categoria: ['', Validators.required]
      })
    }

    guardarProducto(){
      console.log("En este momento estoy guardando")
      console.log(this.form.value)
      this.productosService.guardarProductos(this.form.value).subscribe(
        (res) => {        
          console.log(res)
        },
        (err) => {
          console.log(err);
        }
      )
    }
}