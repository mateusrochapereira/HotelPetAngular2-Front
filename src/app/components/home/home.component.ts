import {Component, OnInit} from '@angular/core';
import {CuidadorService} from "../../services/cuidador.service";
import CuidadorListarResponse from "../../model/response/cuidadorListar.response";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public  cuidadores: Array<CuidadorListarResponse>;
    private route: Router;

  constructor(route: Router, private cuidadorService: CuidadorService) {
    this.cuidadores = [];
    this.listarTodosCuidadores();
    this.route = route;

  }

  ngOnInit(): void {
  this.listarTodosCuidadores();
  }

  listarTodosCuidadores(): any{
    this.cuidadorService.getAll()
      .then(value => this.cuidadores = value);
    console.log(this.cuidadores);
  }
  // buscaCuidadores(): any {
  //   this.cuidadorService.getAll().then(response => {
  //     for (let cuidadorListarRespons of response) {
  //       if (cuidadorListarRespons instanceof CuidadorListarResponse) {
  //         console.log(cuidadorListarRespons);
  //       }
  //     }
  //   });
  // } ;

  linkNovoCuidador(): string[] {
    return ['/novoCuidador']
  };

}
