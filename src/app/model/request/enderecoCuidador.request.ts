export default class EnderecoCuidadorRequest {
  private _quadra: string;
  private _alameda: string;
  private _lote: string;
  private _bairro: string;
  private _cep: string;

  constructor(quadra: string, alameda: string, lote: string, bairro: string, cep: string) {
    this._quadra = quadra;
    this._alameda = alameda;
    this._lote = lote;
    this._bairro = bairro;
    this._cep = cep;
  }

}
