Actividad 2: Parámetros de Ruta y rutas
hija
Objetivo: Usar parámetros de URL y rutas anidadas.
Descripción:
 Crea un componente UsuarioComponent y otro UsuarioDetalleComponent.
 Configura la ruta /usuarios para listar usuarios y /usuarios/:id para mostrar
detalles del usuario seleccionado.
 Utiliza rutas hijas para que UsuarioDetalleComponent se cargue dentro de
UsuarioComponent.
 Accede al parámetro de ruta (id) en UsuarioDetalleComponent usando
ActivatedRoute.
Archivos clave:
 app-routing.module.ts
 usuario.component.*
 usuario-detalle.component.*
Conceptos clave abordados: Parámetros de ruta, ActivatedRoute, rutas hijas, children,
navegación parametrizada