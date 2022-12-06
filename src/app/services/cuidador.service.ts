import {Injectable} from "@angular/core";
import CuidadorListarResponse from "../model/response/cuidadorListar.response";


@Injectable({
  providedIn:'root'
})
export class CuidadorService{
  constructor() {
  }

  public getAll(): Promise<Array<CuidadorListarResponse>>{
    return fetch('http://localhost:8081/cuidadores/listarCuidadores').then(response => {
      return response.json() as unknown as Array<CuidadorListarResponse> ;
    })

  }

}
