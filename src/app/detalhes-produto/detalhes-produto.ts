import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-produto-detalhe',
  templateUrl: './detalhes-produto.html',
  styleUrls: ['./detalhes-produto.css']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: any;
  id: number = 0;

  produtos = [
    { id: 1, nome: 'Smartphone', preco: 2500, descricao: 'Celular com ótima câmera', emEstoque: true },
    { id: 2, nome: 'Fone de ouvido', preco: 300, descricao: 'Fone Bluetooth com cancelamento de ruído', emEstoque: false },
    { id: 3, nome: 'Monitor', preco: 1200, descricao: 'Monitor 24\" Full HD', emEstoque: true }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtos.find(p => p.id === this.id);
  }
}