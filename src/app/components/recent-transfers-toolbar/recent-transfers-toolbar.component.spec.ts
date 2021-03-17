import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransfersToolbarComponent } from './recent-transfers-toolbar.component';

describe('RecentTransfersToolbarComponent', () => {
  let component: RecentTransfersToolbarComponent;
  let fixture: ComponentFixture<RecentTransfersToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTransfersToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransfersToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
