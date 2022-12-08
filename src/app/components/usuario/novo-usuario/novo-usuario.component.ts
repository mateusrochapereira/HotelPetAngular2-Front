import {Component, OnInit} from '@angular/core';
import {NovoUsuarioService} from "../../../services/novoUsuario.service";
import NovoUsuarioRequest from "../../../model/request/novoUsuario.request";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  formUser : FormGroup;

constructor( private formBuilder: FormBuilder , private novoUsuarioService: NovoUsuarioService,
             private router: Router) {

  this.formUser=this.formBuilder.group( {
    nome: [null],
     sobreNome: [null],
      senha: [null],
        email: [null],
      cpf: [null],
    telefone: [null]
  });
}
ngOnInit(): void {
}
onSubmit(){
 this.novoUsuarioService.salvar((this.formUser.value));
 alert("Cadastro com sucesso");
 this.router.navigate(['/login']);

}
onclick() {
  alert('Cadastro concluido',)

  }

}


