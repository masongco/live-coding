import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetManagerComponent } from './pet-manager.component';

describe('PetManagerComponent', () => {
  let component: PetManagerComponent;
  let fixture: ComponentFixture<PetManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
