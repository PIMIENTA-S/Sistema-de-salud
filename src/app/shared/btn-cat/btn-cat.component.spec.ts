import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCatComponent } from './btn-cat.component';

describe('BtnCatComponent', () => {
  let component: BtnCatComponent;
  let fixture: ComponentFixture<BtnCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
