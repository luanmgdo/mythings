import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  data: any;
}

@Injectable()
export class SmanService {
  constructor(
    private http: HttpClient
  ) { }

  getAllSman() {
    return new Promise((resolve, reject) => {
      this.http.get<Response>('http://api.localhost:5000/sman/').subscribe(smans => {
        resolve(smans.data);
      });
    });
  }

  getDetails(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<Response>('http://api.localhost:5000/sman/').subscribe(sman => {
        resolve(sman.data);
        console.log('Dado recebido\n', sman.data);
      });
    });
  }

}
