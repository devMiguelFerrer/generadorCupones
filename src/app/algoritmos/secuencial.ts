import { Injectable } from '@angular/core';
import { IAlgoritmo } from '../models/algoritmo.model';

@Injectable({
  providedIn: 'root'
})
export class Secuencial implements IAlgoritmo {
  generarCupones(valorInicio: number, cantidad: number, listaCupones: number[] = []) {
    for (let i = valorInicio; listaCupones.length < cantidad; i++) {
      listaCupones.push(i);
    }
    return listaCupones;
  }
}
