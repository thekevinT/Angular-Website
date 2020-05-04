import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullnavComponent } from './fullnav.component';

describe('FullnavComponent', () => {
  let component: FullnavComponent;
  let fixture: ComponentFixture<FullnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
