import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheroesComponent } from './myheroes.component';

describe('MyheroesComponent', () => {
  let component: MyheroesComponent;
  let fixture: ComponentFixture<MyheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyheroesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
