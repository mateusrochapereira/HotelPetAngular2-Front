import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esqueceu-a-senha',
  templateUrl: './esqueceu-a-senha.component.html',
  styleUrls: ['./esqueceu-a-senha.component.scss']
})
export class EsqueceuASenhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  linkParaLogin(): string[] {
    return ['/login']
  };

  linkParaNovoUsuario(): string[] {
    return ['/novoUsuario']
  };
}
