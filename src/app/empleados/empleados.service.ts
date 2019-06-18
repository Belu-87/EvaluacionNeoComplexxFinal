import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados: Empleado[];

  constructor(private http: HttpClient) {
    
  }

  getEmpleados() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }

  
}