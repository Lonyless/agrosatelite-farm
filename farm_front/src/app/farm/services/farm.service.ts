import { Injectable } from '@angular/core'
import { Farm, FarmPut as FarmSave } from './../models/Farm'
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL_BASE } from 'src/app/api_config/api_config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmService {
  constructor(private http: HttpClient) { }

  save(farm: FarmSave): Observable<Farm> {
    if (farm.id == null) {
      return this.http.post<Farm>(API_URL_BASE + 'farms', farm)
    } else {
      return this.http.put<Farm>(API_URL_BASE + 'farms/' + farm.id, farm)
    }
  }

  delete(id: number): Observable<Farm> {
    return this.http.delete<Farm>(API_URL_BASE + 'farms/' + id)

  }

  read(id: number): Observable<Farm> {
    return this.http.get<Farm>(API_URL_BASE + 'farms/' + id,)
  }

  list(search?: string): Observable<Farm[]> {
    var params = new HttpParams()
    if (search != null && search.trim().length != 0) {
      params = params.append('search', search)
    }

    return this.http.get<Farm[]>(API_URL_BASE + 'farms', { params: params })
  }

  getConfig() {

  }

}
