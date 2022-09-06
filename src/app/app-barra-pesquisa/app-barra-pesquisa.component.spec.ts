import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarraPesquisaComponent } from './app-barra-pesquisa.component';

describe('AppBarraPesquisaComponent', () => {
  let component: AppBarraPesquisaComponent;
  let fixture: ComponentFixture<AppBarraPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarraPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBarraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
