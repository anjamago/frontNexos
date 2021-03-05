import { Injectable } from '@angular/core';
import { IEditorial } from '../Models/IEditorial';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class EditorialesProviderService {

  constructor(private Http: BaseRequestService) {}

  GetAll = (): Promise<any> => this.Http.getPromise('Editorial');
  GetAllSubribe = () => this.Http.get('Editorial');
  Find = (id: number) => this.Http.get(`Editorial/${id}`);
  Create = (data: IEditorial) => this.Http.post('Editorial', data);
  Update = (id: number, data: IEditorial) => this.Http.put(`Editorial/${id}`, data);
  Delete = (id: number) => this.Http.delete(`Editorial/${id}`);
}
