import { FormControl, FormGroup, Validators } from '@angular/forms';

export const LibroForm = new FormGroup({
    Titulo: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]),
  Anno: new FormControl('', [Validators.required, Validators.minLength(4)]),
  Generon: new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]),
  NumeroPaginas: new FormControl('', [
    Validators.required,
  ]),
  IdAutor: new FormControl('', [
    Validators.required,
  ]),
  IdEditorial: new FormControl('', [
    Validators.required,
  ]),
});
