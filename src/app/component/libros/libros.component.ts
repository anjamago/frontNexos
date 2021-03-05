import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditorialesProviderService } from 'src/app/provider/editoriales-provider.service';
import { AutoresProviderService } from 'src/app/provider/autores-provider.service';
import { LibrosProviderService } from 'src/app/provider/libros-provider.service';
import { AlertService } from 'src/app/utils/alert/alert.service';
import DataSource from 'devextreme/data/data_source';
import { LibroForm } from 'src/app/Forms/Libros-Form';
import { ILibro } from 'src/app/Models/Ilibros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libroForm = LibroForm;
  tableData: DataSource;
  autorList;
  editorialList;

  constructor(
    private modalService: NgbModal,
    private alert: AlertService,
    private EditorialService: EditorialesProviderService,
    private AutoresService: AutoresProviderService,
    private Provider: LibrosProviderService
  ) {}

  ngOnInit(): void {
    this.loadGrib();
    this.EditorialService.GetAllSubribe().subscribe((res: any) => {
      this.editorialList = res.data;
    });
    this.AutoresService.GetAllSubribe().subscribe((res: any) => {
      this.autorList = res.data;
    });
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
    const data = this.libroForm.value;
    const { IdEditorial, IdAutor } = data;

    if (!this.libroForm.valid) {
      this.alert.warning(
        'Porfavor rellenar todo los campos del formulario',
        'Formulario incompleto'
      );
      return;
    }

    data.IdEditorial = IdEditorial.id;
    data.IdAutor = IdAutor.id;

    await this.Provider.Create(data).subscribe(
      async (res) => {
        const { message } = res;
       
        this.loadGrib();
        if (message !== 'Solicitud Ok') {
          this.pushMessage(message);
        }else{
          this.alert.info(
            'La informacion de registro a sido creada con exito',
            'Registro de Libro'
          );
        }
        
      },
      (err) => {
        this.alert.warning(
          'Se precento un error interno intente nueva mente',
          'Se registro un error'
        );
      }
    );
    this.modalService.dismissAll();
    this.libroForm.reset();
  };

  async pushMessage(messages: string) {
    await this.alert.confir(messages, 'Algo a ocurrido');
  }
}
