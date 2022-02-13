import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QustionService {

  constructor(private http:HttpClient) { }

  getQuesionJson(){
    return this.http.get<any>("assets/qustions.json")
  }
}
