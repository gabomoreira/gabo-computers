import { ProdutosService } from 'src/app/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho } from './../../produtos';
import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacao: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const produtoId = Number(routeParam.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
    this.notificacao.notificar('O item foi adicionado ao carrinho');
  }
}
