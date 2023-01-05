import EnderecoCuidadorRequest from "./enderecoCuidador.request";
import CategoriaPetRequest from "./categoriaPet.request";

export default class NovoCuidadorRequest {
  private _descricaoLocal: string;
  private _email: string;


  private _endereco: EnderecoCuidadorRequest;
  private _categoriaPet: CategoriaPetRequest;

  constructor(descricaoLocal: string, email: string, endereco: EnderecoCuidadorRequest
    , categoriaPet: CategoriaPetRequest) {
    this._descricaoLocal = descricaoLocal;
    this._email = email;
    this._endereco = endereco;
    this._categoriaPet = categoriaPet;


  }
}
