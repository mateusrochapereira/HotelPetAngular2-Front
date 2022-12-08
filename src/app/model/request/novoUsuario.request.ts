export default class NovoUsuarioRequest {

  private _email: string;
  private _senha: string;
  private _nome: string;
  private _sobreNome: string;
  private _cpf: string;
  private _telefone: string;

  constructor(email: string, senha: string, nome: string, sobrenome: string, cpf: string, telefone: string) {
    this._email = email;
    this._senha = senha;
    this._nome = nome;
    this._sobreNome = sobrenome;
    this._cpf = cpf;
    this._telefone = telefone;
  }
}
