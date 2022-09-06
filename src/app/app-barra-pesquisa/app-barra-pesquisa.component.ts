import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-barra-pesquisa',
  templateUrl: './app-barra-pesquisa.component.html',
  styleUrls: ['./app-barra-pesquisa.component.css'],
})
export class AppBarraPesquisaComponent implements OnInit {
  descricao = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });
      return;
    }

    this.router.navigate(['produtos']);
  }
}
