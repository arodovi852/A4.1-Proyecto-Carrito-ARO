Actividad 1: Rutas Básicas y routerLink
Objetivo: Implementar navegación SPA usando el router Angular.
Descripción:
 Crea dos componentes simples: InicioComponent y AcercaComponent.
 Configura las rutas /inicio y /acerca en el enrutador de la app.
 Agrega un menú con enlaces (routerLink) que permita alternar entre ambas vistas
sin recargar la página.
 Muestra el mismo menú en ambos componentes.
Archivos clave:
 app-routing.module.ts
 inicio.component.ts y .html
 acerca.component.ts y .html
Conceptos clave abordados: Rutas básicas, componentes, routerLink, RouterModule,
navegación SPA.
app-routing.module.ts
typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'acerca', component: AcercaComponent },
{ path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
inicio.component.ts
typescript
import { Component } from '@angular/core';
@Component({
selector: 'app-inicio',
template: `
<h2>Inicio</h2>
<nav>
<a routerLink="/inicio">Inicio</a> |
<a routerLink="/acerca">Acerca</a>
</nav>
<p>Bienvenido a la página de inicio.</p>
`
})
export class InicioComponent {}
acerca.component.ts
typescript
import { Component } from '@angular/core';
@Component({
selector: 'app-acerca',
template: `
<h2>Acerca</h2>
<nav>
<a routerLink="/inicio">Inicio</a> |
<a routerLink="/acerca">Acerca</a>
</nav>
<p>Información acerca de esta aplicación.</p>
`
})
export class AcercaComponent {}