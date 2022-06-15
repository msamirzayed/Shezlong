import { Injectable } from '@angular/core';
import { IURL } from './api';
import { HttpService } from './http.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  apiUrl: IURL = {};

  constructor(private http: HttpService) {}

  getAll(pageNumber: number = 1) {
    const url = this.apiUrl.all;

    return this.http.get(`${url}${pageNumber}`).pipe(take(1));
  }

  getOne(id: string) {
    const url = this.apiUrl.one;

    return this.http.get(`${url}/${id}`).pipe(take(1));
  }

  addOne(data: any) {
    const url = this.apiUrl.add;

    return this.http.post(`${url}`, data).pipe(take(1));
  }

  updateOne(id: string, data: any) {
    const url = this.apiUrl.update;

    return this.http.put(`${url}/${id}`, data).pipe(take(1));
  }

  deleteOne(id: string, all?: any[]) {
    const url = this.apiUrl.delete;

    return this.http.delete(`${url}/${id}`).pipe(
      take(1),
      map(() => {
        return all?.filter((item) => item.id !== id);
      })
    );
  }
}
