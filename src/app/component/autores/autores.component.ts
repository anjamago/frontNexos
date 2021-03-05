import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import DataSource from 'devextreme/data/data_source';
import { AlertService } from 'src/app/utils/alert/alert.service';
import { AuthorForm } from 'src/app/Forms/Author-Form';
import { AutoresProviderService } from 'src/app/provider/autores-provider.service';
import { IAuthor } from 'src/app/Models/IAuthor';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
})
export class AutoresComponent implements OnInit {
  authorForm = AuthorForm;
  tableData: DataSource;
  constructor(
    private modalService: NgbModal,
    private alert: AlertService,
    private Provider: AutoresProviderService
  ) {}

  ngOnInit(): void {
    this.loadGrib();
  }

  openModal = (content: string): NgbModalRef =>
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });

  loadGrib = () => {
    this.tableData = new DataSource({
      key: 'id',
      load: () => this.Provider.GetAll(),
    });
  };

  save = async () => {
    const value: IAuthor = this.authorForm.value;
    const {
      FechaNacimiento: { year, month, day },
    } = value;
    const monthM = month < 10 ? `0${month}` : month;
    value.FechaNacimiento = `${year}-${monthM}-${day}`;

    if (!this.authorForm.valid) {
      this.alert.warning(
        'Porfavor rellenar todo los campos del formulario',
        'Formulario incompleto'
      );
      return;
    }

    await this.Provider.Create(value).subscribe(
      (res) => {
        this.loadGrib();
        this.alert.info(
          'La informacion de registro a sido creada con exito',
          'Registro de Autor'
        );
      },
      (err) => {
        this.alert.warning(
          'Se precento un error interno intente nueva mente',
          'Se registro un error'
        );
      }
    );
    this.modalService.dismissAll();
    this.authorForm.reset();

  };
}
