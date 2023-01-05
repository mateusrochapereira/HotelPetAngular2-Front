import {Injectable} from "@angular/core";
import NovoCuidadorRequest from "../model/request/novoCuidador.request";


@Injectable({
  providedIn: 'root'
})

export class NovoCuidadorService {
  constructor() {
  }

  salvarCuidador( novoCuidadorRequest: NovoCuidadorRequest) {
    fetch('http://localhost:8081/cuidadores/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(novoCuidadorRequest)
      })
  }
}
