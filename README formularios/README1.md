Actividad 1: Formulario Template-
Driven - Registro de Usuario Básico
Descripción
Crear un formulario dirigido por plantilla para el registro de un nuevo usuario. Este es el
primer contacto con formularios en Angular y te permitirá entender cómo las directivas de
Angular vinculan datos bidireccionales.
Objetivos de Aprendizaje
 Usar la directiva ngModel para vinculación bidireccional de datos
 Implementar validación básica con directivas HTML
 Mostrar mensajes de error usando validadores integrados
 Capturar y procesar datos del formulario
Práctica 1: Formulario de Registro
Archivo: registro.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-registro',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './registro.component.html',
styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario = {
nombre: '',
email: '',
password: '',
confirmPassword: ''
};
usuariosRegistrados: any[] = [];
mensajeExito: string = '';
onSubmit(form: NgForm) {
if (form.valid) {
if (this.usuario.password === this.usuario.confirmPassword) {
this.usuariosRegistrados.push({...this.usuario});
this.mensajeExito = ¡Bienvenido, ${this.usuario.nombre}!;
form.resetForm();
console.log('Usuarios registrados:', this.usuariosRegistrados);
} else {
alert('Las contraseñas no coinciden');
}
}
}
}
Archivo: registro.component.html
Formulario de Registro
Nombre Completo:
El nombre es requerido
Mínimo 3 caracteres
Email:
El email es requerido
Formato de email inválido
Contraseña:
La contraseña es requerida
Mínimo 6 caracteres
Confirmar Contraseña:
Registrarse
{{ mensajeExito }}
Usuarios Registrados
Conceptos clave abordados: Directivas ngModel, validadores HTML integrados,
referencias de template, ciclo de vida del formulario, binding bidireccional