import { Component, OnInit } from '@angular/core';
import {NsmanService} from './nsman.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nsman',
  templateUrl: './nsman.component.html',
  styleUrls: ['./nsman.component.css']
})

export class NsmanComponent implements OnInit {
  nsmans: any;
  constructor(
    private nsmanService: NsmanService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nsmanService.getAllNsman().then(
      nsmans => {
        this.nsmans = nsmans;
    }).catch(error => {
      console.log('Error', error);
    });
  }

  createNsman() {
    this.router.navigate(['/NSMan', 'new']);
  }
}
