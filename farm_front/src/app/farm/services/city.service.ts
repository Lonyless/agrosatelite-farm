import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { API_URL_BASE } from 'src/app/api_config/api_config';
import { Observable } from 'rxjs';
import { City } from '../models/City';

@Injectable({
    providedIn: 'root',
})
export class CityService {
    constructor(private http: HttpClient) { }

    create(city: City) { }

    read(id: number): City {
        return {} as any
    }

    list(): Observable<City[]> {
        return this.http.get<City[]>(API_URL_BASE + 'cities')
    }

    getConfig() {

    }

}
