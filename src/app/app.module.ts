import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   // Agrega FormsModule al arreglo de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
