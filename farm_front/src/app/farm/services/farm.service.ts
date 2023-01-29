import { Injectable } from '@angular/core'
import { Farm } from './../models/Farm'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class FarmService {
  constructor(private http: HttpClient) { }

  create(farm: Farm) {}

  read(id: number): Farm {
    return {} as any
  }

  list(): Farm[] {
    var data = this.http.get<any>('')
    return []
    
  }
  getConfig() {
    
  }
}
