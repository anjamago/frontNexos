import { Injectable } from '@angular/core';
import { IAuthor } from '../Models/IAuthor';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root',
})
export class AutoresProviderService {
  constructor(private Http: BaseRequestService) {}

  GetAll = (): Promise<any> => this.Http.getPromise('Autor');
  GetAllSubribe = () => this.Http.get('Autor');
  Find = (id: number) => this.Http.get(`Autor/${id}`);
  Create = (data: IAuthor) => this.Http.post('Autor', data);
  Update = (id: number, data: IAuthor) => this.Http.put(`Autor/${id}`, data);
  Delete = (id: number) => this.Http.delete(`Autor/${id}`);
}
