import {Injectable} from "@angular/core";
import NovoUsuarioRequest from "../model/request/novoUsuario.request";

@Injectable({
  providedIn: 'root'
})

export class NovoUsuarioService {

  constructor() {
  }
  salvar( novoUsuarioRequest: NovoUsuarioRequest) {
    fetch('http://localhost:8081/user/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoUsuarioRequest)
      })
  }
}
