import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerListComponent } from './reseller-list.component';

describe('ResellerListComponent', () => {
  let component: ResellerListComponent;
  let fixture: ComponentFixture<ResellerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResellerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
