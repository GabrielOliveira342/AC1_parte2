import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-component',
  standalone: false,
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css'
})
export class ProdutoComponent {
  produtos = [
    { id: 1, nome: 'Smartphone', preco: 2500, descricao: 'Celular com ótima câmera', emEstoque: true },
    { id: 2, nome: 'Fone de ouvido', preco: 300, descricao: 'Fone Bluetooth com cancelamento de ruído', emEstoque: false },
    { id: 3, nome: 'Monitor', preco: 1200, descricao: 'Monitor 24" Full HD', emEstoque: true }
  ];

  constructor(private router: Router) {}

  comprar(id: number) {
    this.router.navigate(['detalhes-produto/', id]);
  }
}