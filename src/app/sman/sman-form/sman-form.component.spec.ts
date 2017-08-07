import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmanFormComponent } from './sman-form.component';

describe('SmanFormComponent', () => {
  let component: SmanFormComponent;
  let fixture: ComponentFixture<SmanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
