Actividad 4: Route Guards
(CanActivate)
Objetivo: Restringir acceso a rutas mediante guards.
Descripción:
 Crea un servicio AuthService que simule autenticación con un método
isLoggedIn().
 Crea un guard AuthGuard que implemente CanActivate e impida acceso al
módulo /admin si no hay "login".
 Protege la ruta de lazy loading /admin usando el guard con canActivate o
canLoad.
 Prueba a navegar sin estar autorizado y observa la redirección.
Archivos clave:
 auth/auth.service.ts
 auth/auth.guard.ts
 app-routing.module.ts (uso de canActivate/canLoad)
Conceptos clave abordados: Guards, CanActivate, CanLoad, autenticación,
ActivatedRouteSnapshot, redirecciones.
admin/admin.module.ts
typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{ path: '', component: AdminDashboardComponent }
];
@NgModule({
declarations: [AdminDashboardComponent],
imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AdminModule {}
admin/admin-dashboard.component.ts
typescript
import { Component } from '@angular/core';
@Component({
selector: 'app-admin-dashboard',
template: `<h2>Panel de Administración</h2>`
})
export class AdminDashboardComponent {}
app-routing.module.ts (parcial)
typescript
const routes: Routes = [
{
path: 'admin',
loadChildren: () => import('./admin/admin.module').then(m =>
m.AdminModule)
},
// otras rutas
];