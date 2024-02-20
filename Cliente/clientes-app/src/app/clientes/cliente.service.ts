import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable(
  //{providedIn: 'root'}
)

export class ClienteService {
  public urlEndPoint:string = 'http://localhost:8080/api/clientes'
  public httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})


  constructor(private http:HttpClient, private router: Router) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map( response => response as Cliente[])
    )};

/*
  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint)
    };
*/

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      map((response : any) => response.cliente as Cliente),
      catchError(e =>{
        if (e.status==400) {
          return throwError(() => e);
        }
        console.log(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    )
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/clientes'])
        console.log(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(() => e);
      })
    )
  }

  
/* Se comenta ya que se agrega una validación de formato email en éste service.
  update(cliente: Cliente): Observable<Cliente>{
    return this.http.post(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      map((response : any) => response.cliente as Cliente),
      catchError(e =>{
        if (e.status==400) {
          return throwError(() => e);
        }
        console.log('Error al editar el cliente:', e);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    )
  }
*/
//Nuevo update para validación
update(cliente: Cliente): Observable<Cliente> {
  // Validar el formato del email antes de enviar la solicitud HTTP
  if (!this.isValidEmail(cliente.email)) {
    const errorMessage = 'El formato del email no es válido.';
    Swal.fire('Error', errorMessage, 'error');
    return throwError({ status: 400, error: { mensaje: errorMessage } });
  }

  // Continuar con la solicitud HTTP si la validación es exitosa
  return this.http.put(`${this.urlEndPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders }).pipe(
    map((response: any) => response.cliente as Cliente),
    catchError(e => {
      if (e.status === 400) {
        return throwError(() => e);
      }
      console.log('Error al editar el cliente:', e);
      Swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(() => e);
    })
  );
}
// Función para validar el formato del email
private isValidEmail(email: string): boolean {
  // Utiliza una expresión regular para validar el formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e =>{
        console.log(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    )
  }

}

