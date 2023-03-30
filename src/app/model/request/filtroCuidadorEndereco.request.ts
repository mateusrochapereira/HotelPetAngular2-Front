export default class FiltroCuidadorEnderecoRequest{
  private _endereco: string;
  constructor(endereco: string) {
    this.endereco = "307";
    this._endereco = endereco;

  }

  get endereco(): string {
    return this._endereco;
  }

  set endereco(value: string) {
    this._endereco = value;
  }
}
