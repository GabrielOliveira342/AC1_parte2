import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalheComponent } from './detalhes-produto';

describe('DetalhesProduto', () => {
  let component: ProdutoDetalheComponent;
  let fixture: ComponentFixture<ProdutoDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
