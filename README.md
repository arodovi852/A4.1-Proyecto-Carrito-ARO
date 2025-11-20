# A4.1-Proyecto-Carrito-ARO


Partiendo del trabajo realizado en la entrega anterior,
el proyecto se enfocó al formulario de mensajes, puesto que
este tenía una funcionalidad muy básica y carecía de muchas
funcionalidades adicionales.

---

## Mejora 1: Edición de mensajes introducidos

La mejora más clara es la edición de mensajes introducidos,
para que en vez de tener que eliminar un mensaje desde 0 se
pueda simplemente sobreescribir uno ya existente:

https://github.com/arodovi852/A4.1-Proyecto-Carrito-ARO/blob/28d7dfb8f3556c2de521b2fa7ddb68c288106127/js/app8.js#L71-L83

---

## Mejora 2: Ordenación de mensajes introducidos

Otra mejora clara es la ordenación de los mensajes, puesto
que, a pesar de una funcionalidad muy simple, en caso de
tener muchos mensajes podría ser conveniente tener una
ordenación o filtrado de algún tipo para encontrar más fácilmente
los datos introducidos.

En este caso, se optó por una ordenación de mensajes básica
de más reciente a más antiguo:

https://github.com/arodovi852/A4.1-Proyecto-Carrito-ARO/blob/28d7dfb8f3556c2de521b2fa7ddb68c288106127/js/app8.js#L85-L90

---

## Mejora 3: Vacío de mensajes introducidos

Finalmente, para agilizar el proceso de eliminación de mensajes
y teniendo en cuenta su persistencia al recargar la página,
se ha añadido como funcionalidad la capacidad de eliminar
todos los mensajes introducidos a través de la siguiente función:

https://github.com/arodovi852/A4.1-Proyecto-Carrito-ARO/blob/28d7dfb8f3556c2de521b2fa7ddb68c288106127/js/app8.js#L92-L99
