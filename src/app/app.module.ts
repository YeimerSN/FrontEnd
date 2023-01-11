import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SuscribeteComponent } from './suscribete/suscribete.component';
import { MarcaComponent } from './marca/marca.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { DondeComprarComponent } from './donde-comprar/donde-comprar.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*
Redireccionamiento a los sitios de la aplicacion
*/
const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Productos', component:ProductosComponent},
  {path: 'LaMarca', component:MarcaComponent},
  {path: 'DondeComprar', component:DondeComprarComponent},
  {path: 'Contactanos', component:ContactanosComponent},
  {path: '**', component:NoFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SuscribeteComponent,
    MarcaComponent,
    FooterComponent,
    ProductosComponent,
    DondeComprarComponent,
    ContactanosComponent,
    NoFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
