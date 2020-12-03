import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsformFooterComponent } from './leadsform-footer.component';

describe('LeadsformFooterComponent', () => {
  let component: LeadsformFooterComponent;
  let fixture: ComponentFixture<LeadsformFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsformFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsformFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
