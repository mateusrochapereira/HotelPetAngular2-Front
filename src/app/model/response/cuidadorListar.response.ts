export default class CuidadorListarResponse {
  private _nomeCompleto: string;
  private _quadra: string;
  private _alameda: string;


  constructor(nomeCompleto: string, quadra: string, alameda: string) {
    this._nomeCompleto = nomeCompleto;
    this._quadra = quadra;
    this._alameda = alameda;


  }


  get nomeCompleto(): string {
    return this._nomeCompleto;
  }

  set nomeCompleto(value: string) {
    this._nomeCompleto = value;
  }

  get quadra(): string {
    return this._quadra;
  }

  set quadra(value: string) {
    this._quadra = value;
  }

  get alameda(): string {
    return this._alameda;
  }

  set alameda(value: string) {
    this._alameda = value;
  }

  static empty() {
    return new CuidadorListarResponse("", "", "");
  }
}
