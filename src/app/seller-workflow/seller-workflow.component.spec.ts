import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWorkflowComponent } from './seller-workflow.component';

describe('SellerWorkflowComponent', () => {
  let component: SellerWorkflowComponent;
  let fixture: ComponentFixture<SellerWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
