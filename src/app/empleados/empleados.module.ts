import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosService } from './empleados.service';
import { FormsModule } from '@angular/forms';

import { AltaEmpleadoComponent } from './alta-empleado/alta-empleado.component';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';


@NgModule({

  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [AltaEmpleadoComponent, ListadoEmpleadosComponent],

  providers: [EmpleadosService],

  exports: [AltaEmpleadoComponent, ListadoEmpleadosComponent]
})

export class EmpleadosModule { }