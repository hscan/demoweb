import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestListComponent } from './demotest-list.component';

describe('DemotestListComponent', () => {
  let component: DemotestListComponent;
  let fixture: ComponentFixture<DemotestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
