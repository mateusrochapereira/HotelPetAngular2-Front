import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NovoCuidadorService} from "../../../services/novoCuidador.service";
import {Router} from "@angular/router";
import EnderecoCuidadorRequest from "../../../model/request/enderecoCuidador.request";
import NovoCuidadorRequest from "../../../model/request/novoCuidador.request";
import CategoriaPetRequest from "../../../model/request/categoriaPet.request";

@Component({
  selector: 'app-novo-cuidador',
  templateUrl: './novo-cuidador.component.html',
  styleUrls: ['./novo-cuidador.component.scss']
})
export class NovoCuidadorComponent implements OnInit {

  formCuidador: FormGroup;

  constructor(private formBuilder: FormBuilder, private novoCuidadorService: NovoCuidadorService,
              private router: Router) {

    this.formCuidador = this.formBuilder.group({
      email: [null],
      descricaoLocal: [null],
      cep: [null],
      quadra: [null],
      alameda: [null],
      lote: [null],
      bairro: [null],
      tipo: [null],
      tamanho: [null],
      raca: [null],
      peso: [null]


    });
  }

  ngOnInit() {

  }

  onSubmit() {
    const enderecoCuidadorRequest = new EnderecoCuidadorRequest(
      this.formCuidador.controls['quadra'].value,
      this.formCuidador.controls['alameda'].value,
      this.formCuidador.controls['lote'].value,
      this.formCuidador.controls['bairro'].value,
      this.formCuidador.controls['cep'].value
    );

    const categoriaPetRequest = new CategoriaPetRequest(
      this.formCuidador.controls['tipo'].value,
      this.formCuidador.controls['peso'].value,
      this.formCuidador.controls['tamanho'].value,
      this.formCuidador.controls['raca'].value,
    );

    const novoCuidadorRequest =
      new NovoCuidadorRequest(this.formCuidador.controls['descricaoLocal'].value,
        this.formCuidador.controls['email'].value,
        enderecoCuidadorRequest,
        categoriaPetRequest);

    this.novoCuidadorService.salvarCuidador(novoCuidadorRequest);


    // alert("Cadastro com sucesso");
    // this.router.navigate(['/home']);

  }

}
