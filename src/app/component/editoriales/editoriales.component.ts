import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import DataSource from 'devextreme/data/data_source';
import { AlertService } from 'src/app/utils/alert/alert.service';
import { EditorialForm } from 'src/app/Forms/Editor-Form';
import { EditorialesProviderService } from 'src/app/provider/editoriales-provider.service';
import { IEditorial } from 'src/app/Models/IEditorial';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css'],
})

export class EditorialesComponent implements OnInit {
  authorForm = EditorialForm;
  tableData: DataSource;

  constructor(
    private modalService: NgbModal,
    private alert: AlertService,
    private Provider: EditorialesProviderService
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
    const value: IEditorial = this.authorForm.value;
    console.log(value, !this.authorForm.valid); 

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
          'Registro de Editorial'
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
