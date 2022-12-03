import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCuidadorComponent } from './novo-cuidador.component';

describe('NovoCuidadorComponent', () => {
  let component: NovoCuidadorComponent;
  let fixture: ComponentFixture<NovoCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoCuidadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
