import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {SmanService} from '../sman.service';

@Component({
  selector: 'app-sman-detail',
  templateUrl: './sman-detail.component.html',
  styleUrls: ['./sman-detail.component.css']
})
export class SmanDetailComponent implements OnInit, OnDestroy {
  sman: any[];
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private smanService: SmanService
  ) { }

  ngOnInit() {
    this.inscricao  = this.route.params
        .subscribe(
          (params: any) => {
            let id = params['id'];
            this.sman = this.smanService.getDetails(id);
          }
        );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
