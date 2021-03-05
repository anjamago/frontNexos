import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EmailExpress} from 'src/app/utils/Consts/ExpressRegular';
export const EditorialForm = new FormGroup({
  Nombre: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]),
  DirecionCorrespondencia: new FormControl('', [Validators.required, Validators.minLength(3)]),
  Telefono: new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]),
  Correo: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(EmailExpress),
    Validators.minLength(3),
  ]),
  LibrosRegistrado: new FormControl('', [
    Validators.required,
  ]),
});
