import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { API_URL_BASE } from 'src/app/api_config/api_config';
import { Observable } from 'rxjs';
import { Owner } from '../models/Owner';

@Injectable({
    providedIn: 'root',
})
export class OwnerService {
    constructor(private http: HttpClient) { }

    create(owner: Owner) {

    }

    read(id: number): Owner {
        return {} as any
    }

    list(): Observable<Owner[]> {
        return this.http.get<Owner[]>(API_URL_BASE + 'owners')
    }

    getConfig() {

    }

}
