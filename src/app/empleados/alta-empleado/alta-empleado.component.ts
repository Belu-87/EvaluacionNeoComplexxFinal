
import { Empleado } from './../empleados.model';
import { EmpleadosService } from './../empleados.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styleUrls: ['./alta-empleado.component.css']
})
export class AltaEmpleadoComponent implements OnInit {

  empleado: Empleado;

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
  	this.empleado = this.empleadosService.nuevoEmpleado();
  }

  nuevoEmpleado(): void {
  	this.empleadosService.agregarEmpleado(this.empleado);
  	this.empleado = this.empleadosService.nuevoEmpleado();
  }
}