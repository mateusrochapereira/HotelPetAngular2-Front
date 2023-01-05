import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NovoCuidadorService} from "../../services/novoCuidador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cuidador',
  templateUrl: './cuidador.component.html',
  styleUrls: ['./cuidador.component.scss']
})
export class CuidadorComponent implements OnInit {

constructor() {
}


  ngOnInit(): void {
  }

}
