Actividad 5: Navigation extras y
Redirecciones
Objetivo: Usar rutas wildcard y redirecciones automáticas.
Descripción:
 Añade una ruta wildcard (**) que capture rutas no definidas y muestre un
componente NotFoundComponent (404).
 Configura una redirección de / a /inicio al entrar a la web usando redirectTo.
 Implementa navegación con parámetros de query (ejemplo: /inicio?
promo=blackFriday).
 Accede a los parámetros de query con ActivatedRoute.queryParams.
Archivos clave:
 app-routing.module.ts
 not-found.component.ts
 Uso de Router para navegación programática con extras.
Conceptos clave abordados: Wildcard routes, redirectTo, queryParams, navegación con
extras, rutas de fallback.
not-found.component.ts
typescript
import { Component } from '@angular/core';
@Component({
selector: 'app-not-found',
template: `<h2>404 - Página no encontrada</h2>`
})
export class NotFoundComponent {}
app-routing.module.ts
typescript
const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'acerca', component: AcercaComponent },
{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
{ path: '**', component: NotFoundComponent }
];
Ejemplo navegación programática con extras
typescript
import { Router } from '@angular/router';
constructor(private router: Router) {}
navegarConQuery() {
this.router.navigate(['/inicio'], { queryParams: { promo:
'blackFriday' } });
}