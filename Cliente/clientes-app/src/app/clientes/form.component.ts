import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
 
  private cliente: Cliente = new Cliente();
  private titulo: string = "Crear cliente";
  public errores: string[];

  getCliente(): Cliente {
    return this.cliente;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getErrores(): string[] {
    return this.errores;
  }

  constructor(private clienteService : ClienteService, private router : Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.cargarCliente()
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => {
          this.cliente = cliente;
          this.titulo = "Editar cliente";
        });
      }
    });
  }

  create(): void{
    this.clienteService.create(this.cliente)
    .subscribe(cliente => {
      this.router.navigate(['/clientes'])
      swal.fire('Nuevo Cliente', `El cliente ${cliente.nombre} ha sido creado exitosamente`, 'success')
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error('Código de error desde el backend: ' + err.status);
      console.error();
    }
    )
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(
      cliente => {
        this.router.navigate(['/clientes'])
        swal.fire('Cliente Actualizado', `El cliente ${cliente.nombre} ha sido modificado exitosamente`, 'success')
      },
       err => {
         this.errores = err.error.errors as string[];
         console.error('Código de error desde el backend: ' + err.status);
         console.error();
       }
    )
  }
}
