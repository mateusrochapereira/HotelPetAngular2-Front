import EnderecoCuidadorRequest from "../request/enderecoCuidador.request";
import CategoriaPetRequest from "../request/categoriaPet.request";
import {empty} from "rxjs";

export default class CuidadorListarResponse{



  constructor( descricaoLocal: string, email: string, endereco: EnderecoCuidadorRequest
    , categoriaPet: CategoriaPetRequest ) {
    this.descricaoLocal = descricaoLocal;
    this.email = email;
    this.endereco = endereco;
    this.categoriaPet = categoriaPet;


  }

descricaoLocal!: string;
  email!: string;
  endereco!: EnderecoCuidadorRequest;
  categoriaPet!: CategoriaPetRequest;

  static empty() {
    return new CuidadorListarResponse( '', '',
      new EnderecoCuidadorRequest('','','','','',),
      new CategoriaPetRequest('',0,0,''));
  }


}
