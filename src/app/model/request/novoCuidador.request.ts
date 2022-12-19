import EnderecoCuidadorRequest from "./enderecoCuidador.request";

export default class NovoCuidadorRequest {
  private _descricaoLocal: string;
  private _email: string;

  private _categoriaTipo: string;
  private _endereco: EnderecoCuidadorRequest;
  private _categoriaRaca: string;
  private _categoriaTamanho: string;
  private _categoriaPeso: string;

  constructor(descricaoLocal: string, email: string, endereco: EnderecoCuidadorRequest
    , categoriaTipo: string, categoriaTamanho: string, categoriaRaca: string,
              categoriaPeso: string) {
    this._descricaoLocal = descricaoLocal;
    this._email = email;
    this._endereco = endereco;
    this._categoriaTipo = categoriaTipo;
    this._categoriaTamanho = categoriaTamanho;
    this._categoriaRaca = categoriaRaca;
    this._categoriaPeso = categoriaPeso;
  }
}
