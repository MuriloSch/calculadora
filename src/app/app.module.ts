import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';  // Corrigido para importar corretamente

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent  // Declarando o CalculadoraComponent aqui
  ],
  imports: [
    BrowserModule,
    FormsModule  // Adicionando FormsModule nos imports
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap do AppComponent
})
export class AppModule { }
