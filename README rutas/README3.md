Actividad 3: Lazy Loading de Módulos
Objetivo: Implementar carga perezosa (lazy loading) para optimizar la app.
Descripción:
 Crea un módulo apartado llamado AdminModule con su propio routing y un
componente como AdminDashboardComponent.
 Configura la ruta /admin para que use lazy loading y cargue el módulo solo al
acceder a /admin.
 Verifica los bundles en la consola de red para observar la carga diferida.
Archivos clave:
 admin/admin.module.ts
 admin/admin-routing.module.ts
 app-routing.module.ts (con loadChildren)
Conceptos clave abordados: Lazy loading, loadChildren, feature modules, optimización
de bundles.
usuario.component.ts
typescript
import { Component } from '@angular/core';
@Component({
selector: 'app-usuario',
template: `
<h2>Usuarios</h2>
<ul>
<li><a [routerLink]="['/usuarios', 1]">Usuario 1</a></li>
<li><a [routerLink]="['/usuarios', 2]">Usuario 2</a></li>
</ul>
<router-outlet></router-outlet>
`
})
export class UsuarioComponent {}
usuario-detalle.component.ts
typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
selector: 'app-usuario-detalle',
template: `
<h3>Detalle de Usuario</h3>
<p>ID de usuario: {{ userId }}</p>
`
})
export class UsuarioDetalleComponent implements OnInit {
userId: string | null = null;
constructor(private route: ActivatedRoute) {}
ngOnInit() {
this.userId = this.route.snapshot.paramMap.get('id');
}
}
app-routing.module.ts (parcial)
typescript
const routes: Routes = [
{
path: 'usuarios', component: UsuarioComponent,
children: [
{ path: ':id', component: UsuarioDetalleComponent }
]
},
// otras rutas aquí
];