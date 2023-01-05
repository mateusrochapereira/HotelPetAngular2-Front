export  default class CategoriaPetRequest{
  private _tipo: string;
  private _peso: number;
  private _tamanho: number;
  private _raca: string;

  constructor( tipo: string, peso: number, tamanho: number, raca: string) {
    this._tipo = tipo;
    this._peso = peso;
    this._tamanho = tamanho;
    this._raca = raca;
  }
}
