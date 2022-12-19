import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NovoCuidadorService} from "../../../services/novoCuidador.service";
import {Router} from "@angular/router";
import EnderecoCuidadorRequest from "../../../model/request/enderecoCuidador.request";
import NovoCuidadorRequest from "../../../model/request/novoCuidador.request";

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
      tipodePet: [null],
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
    //const novoCuidadorRequest = new NovoCuidadorRequest(this.formCuidador.controls['email'].value,enderecoCuidadorRequest);


    //this.novoCuidadorService.salvarCuidador(novoCuidadorRequest);


    //
    alert("Cadastro com sucesso");
    this.router.navigate(['/home']);

  }

  onclick() {
    alert('Cadastro concluido',)

  }
}
