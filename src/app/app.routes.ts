import { Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.components';
import { ProductosComponent } from './productos/productos.component';
import { FacturaComponent } from './factura/factura.component';
import {RegistroAvanzadoComponent} from './validators/registro-avanzado';
import { PerfilUsuarioComponent} from './perfil-usuario/perfil-usuario.component';


export const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'validators', component: RegistroAvanzadoComponent},
  { path: 'perfil-usuario', component: PerfilUsuarioComponent}
  { path: '', redirectTo: '/registro', pathMatch: 'full' }
];
