Actividad 4: Validación Asincrónica y
Integración con API
Descripción
Desarrollar un formulario que valide datos de forma asincrónica mediante llamadas
simuladas a un servicio backend. Aprenderás patrones de validación moderna y gestión de
promesas.
Objetivos de Aprendizaje
 Implementar validadores asincronos con promesas
 Simular llamadas a servicios HTTP
 Mostrar estados de carga durante validación
 Manejar errores de validación asincrónica
Práctica 4: Validador Asincrónico de Email Único
Archivo: validators.service.ts
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})
export class ValidatorsService {
// Simular base de datos de emails registrados
emailsRegistrados = ['admin@example.com', 'usuario@example.com', 'test@example.com'];
validarEmailUnico(): AsyncValidatorFn {
return (control: AbstractControl): Observable<ValidationErrors | null> => {
if (!control.value) {
return of(null);
}
// Simular llamada a API con delay de 1 segundo
return of(this.emailsRegistrados.includes(control.value)).pipe(
delay(1000),
map(existe => existe ? { emailExiste: true } : null)
);
};
}
validarUsernameDisponible(): AsyncValidatorFn {
return (control: AbstractControl): Observable<ValidationErrors | null> => {
if (!control.value) {
return of(null);
}
// Simular validación: usernames que comienzan con 'admin'
están reservados
return
of(control.value.toLowerCase().startsWith('admin')).pipe(
delay(800),
map(reservado => reservado ? { usernameReservado: true } :
null)
);
};
}
}
Archivo: registro-avanzado.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from
'@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatorsService } from './validators.service';
@Component({
selector: 'app-registro-avanzado',
standalone: true,
imports: [ReactiveFormsModule, CommonModule],
templateUrl: './registro-avanzado.component.html',
styleUrls: ['./registro-avanzado.component.css']
})
export class RegistroAvanzadoComponent implements OnInit {
registroForm!: FormGroup;
enviando = false;
constructor(
private fb: FormBuilder,
private validatorsService: ValidatorsService
) {}
ngOnInit() {
this.inicializarFormulario();
}
inicializarFormulario() {
this.registroForm = this.fb.group({
username: [
'',
[Validators.required, Validators.minLength(3)],
[this.validatorsService.validarUsernameDisponible()]
],
email: [
'',
[Validators.required, Validators.email],
[this.validatorsService.validarEmailUnico()]
],
password: ['', [Validators.required, Validators.minLength(8)]],
terminos: [false, Validators.requiredTrue]
});
}
onSubmit() {
if (this.registroForm.valid) {
this.enviando = true;
// Simular envío a servidor
setTimeout(() => {
console.log('Registro completado:', this.registroForm.value);
this.enviando = false;
alert('¡Registro completado exitosamente!');
}, 2000);
}
}
validarCampo(nombreCampo: string): boolean {
const control = this.registroForm.get(nombreCampo);
return control?.invalid && control?.touched || false;
}
mostrarCargando(nombreCampo: string): boolean {
const control = this.registroForm.get(nombreCampo);
return control?.pending || false;
}
}
Archivo: registro-avanzado.component.html
Registro Avanzado con Validación
Asincrónica
Username:
Verificando...
Requerido
Mínimo 3 caracteres
Username no disponible (reservado)
Email:
Verificando disponibilidad...
Requerido
Email inválido
Este email ya está registrado
Validando disponibilidad del email...
Contraseña:
Requerida
Mínimo 8 caracteres
Acepto los términos y condiciones
Debes aceptar los términos
{{ enviando ? 'Registrando...' : 'Crear Cuenta' }}
Validando información...
Conceptos clave abordados: Validadores asincronos, AsyncValidatorFn, simulación
de promesas, manejo de estados de carga, Observable y operadores RxJS