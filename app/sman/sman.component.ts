import { Component, OnInit } from '@angular/core';
import {SmanService} from './sman.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sman',
  templateUrl: './sman.component.html',
  styleUrls: ['./sman.component.css']
})
export class SmanComponent implements OnInit {
  private smans: any[] = [];

  constructor(
    private smanService: SmanService,
    private router: Router
  ) { }

  ngOnInit() {
    this.smans = this.smanService.getAllSMan();
  }
  createSman() {
    this.router.navigate(['/SMan', 'new']);
  }

}
