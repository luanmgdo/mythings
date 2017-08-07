import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {NsmanService} from '../nsman.service';

@Component({
  selector: 'app-nsman-form',
  templateUrl: './nsman-form.component.html',
  styleUrls: ['./nsman-form.component.css']
})
export class NsmanFormComponent implements OnInit, OnDestroy {
  nsman: any = {};
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private nsmanServcice: NsmanService
  ) { }
  onSubmit(form) {
    console.log(form);
  }
  ngOnInit() {
    this. inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params ['id']
        this.nsman = this.nsmanServcice.getDetails(id);
        if (this.nsman === null) {
          this.nsman = {};
        }
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
