import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';

@Injectable()
export class EmpleadosService {

  private empleados: Empleado[];

  constructor() {
    this.empleados = [];
  }

  getEmpleados() {
    return this.empleados;
  }

  agregarEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);
  }

  nuevoEmpleado(): Empleado {
    return {
      id: this.empleados.length,
      nombre: '',
      apellido: '',
      direccion: ''
    };
  }
}