import {Component, OnInit} from '@angular/core';
import {CuidadorService} from "../../services/cuidador.service";
import CuidadorListarResponse from "../../model/response/cuidadorListar.response";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private cuidadorService: CuidadorService) {
  }

  ngOnInit(): void {
    this.buscaCuidadores();
  }

  buscaCuidadores(): any {
    this.cuidadorService.getAll().then(response => {
      for (let cuidadorListarRespons of response) {
        if (cuidadorListarRespons instanceof CuidadorListarResponse) {
          console.log(cuidadorListarRespons);
        }
      }
    });
  } ;

  linkNovoCuidador(): string[] {
    return ['/novoCuidador']
  };

}
