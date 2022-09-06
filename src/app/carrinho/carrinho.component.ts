import { Router } from '@angular/router';
import { IProdutoCarrinho } from './../produtos';
import { CarrinhoService } from 'src/app/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, curr) => prev + curr.preco * curr.quantidade,
      0
    );
    return this.total;
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(
      (item) => item.id !== produtoId
    );
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar() {
    alert('Parabéns, você finalizou suas compras! :)');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
