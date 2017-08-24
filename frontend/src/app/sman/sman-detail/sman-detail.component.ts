import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SmanService} from '../sman.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sman-detail',
  templateUrl: './sman-detail.component.html',
  styleUrls: ['./sman-detail.component.css']
})

export class SmanDetailComponent implements OnInit, OnDestroy {
  sman: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private smanService: SmanService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.smanService.getDetails(params.id).then(sman => {
          this.sman = sman;
        }).catch(error => {
          console.log('Error', error);
        });
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
