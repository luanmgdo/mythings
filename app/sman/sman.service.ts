import { Injectable } from '@angular/core';

@Injectable()
export class SmanService {
  private smans: any[] = [
    {id: 1, name: 'teste' }
  ];

  getAllSMan() {
    return this.smans;
  }
  getDetails(id: number) {
    for ( let i = 0; i < this.smans.length; i++){
      let sman = this.smans[i];
      if (sman.id == id) {
        return sman;
      }
    }
    return null;
  }

  constructor() { }

}
