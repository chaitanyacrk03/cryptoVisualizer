import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoTableComponent } from './crypto-table.component';

describe('CryptoTableComponent', () => {
  let component: CryptoTableComponent;
  let fixture: ComponentFixture<CryptoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoTableComponent]
    });
    fixture = TestBed.createComponent(CryptoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
