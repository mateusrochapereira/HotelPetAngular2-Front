import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueceuASenhaComponent } from './esqueceu-a-senha.component';

describe('EsqueceuASenhaComponent', () => {
  let component: EsqueceuASenhaComponent;
  let fixture: ComponentFixture<EsqueceuASenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqueceuASenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsqueceuASenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
