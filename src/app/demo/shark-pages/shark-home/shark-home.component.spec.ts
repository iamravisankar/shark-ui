import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharkHomeComponent } from './shark-home.component';

describe('SharkHomeComponent', () => {
  let component: SharkHomeComponent;
  let fixture: ComponentFixture<SharkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharkHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
