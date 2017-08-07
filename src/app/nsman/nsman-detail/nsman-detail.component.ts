import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NsmanService} from '../nsman.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-nsman-detail',
  templateUrl: './nsman-detail.component.html',
  styleUrls: ['./nsman-detail.component.css']
})
export class NsmanDetailComponent implements OnInit, OnDestroy {
  nsman: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private nsmanService: NsmanService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        console.log("antes", params);
        this.nsmanService.getDetails(params.id).then(nsman => {
          this.nsman = nsman;
          console.log(this.nsman);
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
