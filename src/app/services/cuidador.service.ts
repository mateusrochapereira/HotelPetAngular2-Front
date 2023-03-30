import {Injectable} from "@angular/core";
import CuidadorListarResponse from "../model/response/cuidadorListar.response";
import {Observable} from "rxjs";
import FiltroCuidadorEnderecoRequest from "../model/request/filtroCuidadorEndereco.request";


@Injectable({
  providedIn: 'root'
})
export class CuidadorService {
  constructor( ) {
  }


  getEndereco(endereco: string ): Promise<CuidadorListarResponse>{
    return fetch(`http://localhost:8081/cuidadores/findByEndereco?endereco=307`)
      .then(response => {
        return response.json() as unknown as CuidadorListarResponse;
      })
  }
}
