import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {NsmanService} from '../nsman.service';

@Component({
  selector: 'app-nsman-detail',
  templateUrl: './nsman-detail.component.html',
  styleUrls: ['./nsman-detail.component.css']
})
export class NsmanDetailComponent implements OnInit, OnDestroy {

  nsman: any[];
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nsmanService: NsmanService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) =>{
        let id = params['id'];
        this.nsman = this.nsmanService.getDetails(id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
