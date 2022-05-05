import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHitosComponent } from './lista-hitos.component';

describe('ListaHitosComponent', () => {
  let component: ListaHitosComponent;
  let fixture: ComponentFixture<ListaHitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
