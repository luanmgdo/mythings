import { Injectable } from '@angular/core';

@Injectable()
export class NsmanService {
  private nsmans: any[] = [
    {id: 10, name: 'Nsman1'},
    {id: 11, name: 'Nsman2'}
  ];
  getAllNsman() {
    return this.nsmans;
  }
  getDetails(id: number) {
    for ( let i = 0; i < this.nsmans.length; i++) {
      let nsman = this.nsmans[i];
      if (nsman.id == id) {
        return nsman;
      }
    }
    return null;
  }
  constructor() { }

}
