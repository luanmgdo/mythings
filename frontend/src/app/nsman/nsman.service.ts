import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  data: any;
}

@Injectable()
export class NsmanService {
  constructor(
    private http: HttpClient
  ) { }

  getAllNsman(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<Response>('http://api.localhost:5000/nsman/').subscribe(nsmans => {
        resolve(nsmans.data);
        console.log('dados', nsmans.data);

      });
    });

  }

  getDetails(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<Response>('http://api.localhost:5000/nsman/' + id).subscribe(nsman => {
        resolve(nsman.data);
      });
    });
  }

}
