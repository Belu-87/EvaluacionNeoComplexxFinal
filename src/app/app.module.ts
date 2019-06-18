import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadosModule } from './empleados/empleados.module';
import { AltaEmpleadoComponent } from './empleados/alta-empleado/alta-empleado.component';
import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    EmpleadosModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []

})
export class AppModule { }
