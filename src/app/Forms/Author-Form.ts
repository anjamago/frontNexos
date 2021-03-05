import { FormGroup, FormControl, Validators } from '@angular/forms';

export const AuthorForm = new FormGroup({
  NombreCompleto: new FormControl('', [Validators.required, Validators.minLength(3)]),
  Ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
  Correo: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(5),
  ]),
  FechaNacimiento: new FormControl('', [Validators.required, Validators.minLength(3)]),

});
