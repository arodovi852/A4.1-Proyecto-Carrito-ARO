Actividad 2: Formulario Reactivo -
Gestión de Productos
Descripción
Crear un formulario reactivo para gestionar un catálogo de productos. Este enfoque te
introduce a FormBuilder, FormGroup y FormControl programáticos, proporcionando
mayor control y testabilidad.
Objetivos de Aprendizaje
 Utilizar FormBuilder para simplificar la creación de formularios
 Implementar validadores síncronos integrados
 Acceder a controles de formulario mediante referencias programáticas
 Gestionar estado del formulario y valores
Práctica 2: Gestor de Productos
Archivo: productos.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from
'@angular/forms';
import { CommonModule } from '@angular/common';
interface Producto {
id: number;
nombre: string;
descripcion: string;
precio: number;
cantidad: number;
categoria: string;
}
@Component({
selector: 'app-productos',
standalone: true,
imports: [ReactiveFormsModule, CommonModule],
templateUrl: './productos.component.html',
styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
productosForm!: FormGroup;
productos: Producto[] = [];
proximoId = 1;
constructor(private fb: FormBuilder) {}
ngOnInit() {
this.inicializarFormulario();
}
inicializarFormulario() {
this.productosForm = this.fb.group({
nombre: ['', [Validators.required, Validators.minLength(3)]],
descripcion: ['', [Validators.required, Validators.maxLength(200)]],
precio: ['', [Validators.required, Validators.min(0.01)]],
cantidad: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
categoria: ['', Validators.required]
});
}
onSubmit() {
if (this.productosForm.valid) {
const nuevoProducto: Producto = {
id: this.proximoId++,
...this.productosForm.value
};
this.productos.push(nuevoProducto);
console.log('Productos:', this.productos);
this.productosForm.reset();
} else {
console.log('Formulario inválido');
}
}
obtenerProducto(id: number) {
return this.productos.find(p => p.id === id);
}
eliminarProducto(id: number) {
this.productos = this.productos.filter(p => p.id !== id);
}
calcularTotal(): number {
return this.productos.reduce((total, p) => total + (p.precio * p.cantidad), 0);
}
}
Archivo: productos.component.html
Gestor de Productos
Nombre del Producto:
Requerido
Mínimo 3 caracteres
Descripción:
Requerido
Máximo 200 caracteres
Precio (€):
Requerido
Debe ser mayor a 0
Cantidad:
Requerido
Mínimo 1
Categoría:
Requerido
Agregar Producto
Productos Ingresados
\begin{table} \begin{tabular}{|c|l|p{3cm}|c|c|c|} \hline ID & Nombre & Descripción &
Precio & Cantidad & Acciones \\ \hline\hline \end{tabular} \caption{Listado de productos
registrados} \end{table}
Total del Inventario: {{ calcularTotal() | currency:'EUR':'symbol':'1.2-2' }}
Conceptos clave abordados: FormBuilder, FormGroup, FormControl, validadores
síncronos, acceso programático a controles, gestión de estado del formulario.