import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaComponent } from './fifa.component';

describe('FifaComponent', () => {
  let component: FifaComponent;
  let fixture: ComponentFixture<FifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
