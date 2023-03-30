import {Component, OnInit} from '@angular/core';
import {CuidadorService} from "../../services/cuidador.service";
import CuidadorListarResponse from "../../model/response/cuidadorListar.response";
import {Router} from "@angular/router";
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import FiltroCuidadorEnderecoRequest from "../../model/request/filtroCuidadorEndereco.request";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formBuscaCuidador: FormGroup;
  private cuidadores: CuidadorListarResponse[];
  route: Router;
  private endereco: FiltroCuidadorEnderecoRequest;

  constructor(router: Router, private cuidadorService: CuidadorService,  private formBuilder: FormBuilder,
              private filtro: FiltroCuidadorEnderecoRequest) {
    this.endereco = this.filtro;
    this.formBuscaCuidador = this.formBuilder.group({
      endereco: [null],
    })
    this.cuidadores = new Array<CuidadorListarResponse>();
    this.route = router;

    // this.enderecoWeb = FiltroCuidadorEnderecoRequest.this.endereco;

  }

  ngOnInit() {



  }


  buscaPorEndereco(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value

    this.cuidadorService.getEndereco(this.endereco.endereco) =>
    {
      return this.endereco.endereco.toLocaleLowerCase().includes(value)
    )};
      // .then(response => {
      //   console.log(response);
      //   console.log(this.cuidadorService)
      //   let cuidador: CuidadorListarResponse = response;
      //   this.formBuscaCuidador.setValue({
      //     nomeCompleto: cuidador.nomeCompleto,
      //     alameda: cuidador.alameda,
      //     quadra: cuidador.quadra
      //
      //
      //
      //   })
      // });

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
