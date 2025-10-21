import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  form: any;
  cd: any;

  constructor(private fb: FormBuilder, 
    private clientesService:ClientesService,
    private alertController:AlertController) {}

    ngOnInit(){
      this.crearFormulario();
    }

    crearFormulario(){
      this.form = this.fb.group({
        nombre_cliente:['', Validators.required],
        fecha_cliente:['', Validators.required],
        tipo_identificacion: ['', Validators.required],
        identificacion_cliente: ['', Validators.required],
        email_cliente: ['', Validators.required]
      })
    }

    guardarCliente(){
      console.log("En este momento estoy guardando")
      console.log(this.form.value)
      this.clientesService.guardarClientes(this.form.value).subscribe(
        (res) => {        
          console.log(res)
        },
        (err) => {
          console.log(err);
        }
      )
    }
}