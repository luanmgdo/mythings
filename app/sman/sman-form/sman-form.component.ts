import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {SmanService} from '../sman.service';

@Component({
  selector: 'app-sman-form',
  templateUrl: './sman-form.component.html',
  styleUrls: ['./sman-form.component.css']
})
export class SmanFormComponent implements OnInit, OnDestroy {
  sman: any = {};
  inscricao: Subscription;
  constructor(
    private route: ActivatedRoute,
    private smanService: SmanService
  ) { }
  onSubmit(form) {
    console.log(form);
  }
  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.sman = this.smanService.getDetails(id);
        if (this.sman === null) {
          this.sman = {};
        }
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


}
