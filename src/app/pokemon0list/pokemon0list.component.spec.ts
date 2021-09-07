import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemon0listComponent } from './pokemon0list.component';

describe('Pokemon0listComponent', () => {
  let component: Pokemon0listComponent;
  let fixture: ComponentFixture<Pokemon0listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pokemon0listComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pokemon0listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
