import { Component, OnInit } from '@angular/core';
import {SmanService} from './sman.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Response {
  data: any;
}

@Component({
  selector: 'app-sman',
  templateUrl: './sman.component.html',
  styleUrls: ['./sman.component.css']
})

export class SmanComponent implements OnInit {
  smans: any;
  constructor(
    private smanService: SmanService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.smanService.getAllSman().then(
      smans => {
        this.smans = smans;
      }).catch(error => {
      console.log('Error', error);
    });
  }

  createSman() {
    this.router.navigate(['/SMan', 'new']);
  }
}
