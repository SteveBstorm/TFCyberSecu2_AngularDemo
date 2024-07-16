import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibleComponent } from './cible.component';

describe('CibleComponent', () => {
  let component: CibleComponent;
  let fixture: ComponentFixture<CibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
