import { Injectable } from '@angular/core';
import { ILibro } from '../Models/Ilibros';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class LibrosProviderService {

  constructor(private Http: BaseRequestService) {}

  GetAll = (): Promise<ILibro> => this.Http.getPromise('Libro');
  Find = (id: number) => this.Http.get(`Libro/${id}`);
  Create = (data: any) => this.Http.post('Libro', data);
  Update = (id: number, data: any) => this.Http.put(`Libro/${id}`, data);
  Delete = (id: number) => this.Http.delete(`Libro/${id}`);

}
