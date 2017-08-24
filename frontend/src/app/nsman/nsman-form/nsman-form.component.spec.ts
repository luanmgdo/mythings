import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsmanFormComponent } from './nsman-form.component';

describe('NsmanFormComponent', () => {
  let component: NsmanFormComponent;
  let fixture: ComponentFixture<NsmanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsmanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsmanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
