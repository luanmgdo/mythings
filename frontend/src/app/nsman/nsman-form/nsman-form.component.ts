import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Component({
  selector: 'app-nsman-form',
  templateUrl: './nsman-form.component.html',
  styleUrls: ['./nsman-form.component.css']
})
export class NsmanFormComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [null],
      name: [null],
      iface: [null]
    });

  }

  onSubmit() {
    console.log(this.form.value);
    this.http.post('http://localhost:5000/nsman/new', JSON.stringify(this.form.value))
      .map(res => res )
      .subscribe(data => console.log(data));
  }

  ngOnDestroy() {

  }
}
