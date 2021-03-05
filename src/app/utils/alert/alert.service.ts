import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private jsonConfig: any = {
    title: '',
    text: '',
    type: '',
    confirmButtonText: 'aceptar'
  }


  success(msj: string, title: string) {
    this.jsonConfig.text = msj;
    this.jsonConfig.title = title;
    this.jsonConfig.type = 'success';
    Swal.fire(this.jsonConfig);
  }

  error(msj: string, title: string) {
    this.jsonConfig.text = msj;
    this.jsonConfig.title = title;
    this.jsonConfig.type = 'error';
    Swal.fire(this.jsonConfig);
  }

  info(msj: string, title: string) {
    this.jsonConfig.text = msj;
    this.jsonConfig.title = title;
    this.jsonConfig.type = 'info';
    Swal.fire(this.jsonConfig);
  }

  warning(msj: string, title: string) {
    this.jsonConfig.text = msj;
    this.jsonConfig.title = title;
    this.jsonConfig.type = 'warning';
    Swal.fire(this.jsonConfig);
  }
  confir(title, input) {
    return Swal.fire({
      title: title,
      input: input,
      inputPlaceholder: '....'
    });
  }
}
