import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient : HttpClient) {
    this.getJson().subscribe(data =>{
      console.log(data);
    });
   }
   public getJson(): Observable<any> {
     return this.httpclient.get("./assets/inputfile/inputdata.json");
   }
}
