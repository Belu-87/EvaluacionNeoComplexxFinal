import { Empleado } from './../empleados.model';
import { EmpleadosService } from './../empleados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit {

  private empleados: null;

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
  	this.empleadosService.getEmpleados()
  		.subscribe( result => this.empleados = result);
  }

}
