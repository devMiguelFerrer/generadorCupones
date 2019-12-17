import { Injectable } from '@angular/core';
import { IAlgoritmo } from '../models/algoritmo.model';

@Injectable({
  providedIn: 'root'
})
export class Pares implements IAlgoritmo {
  generarCupones(valorInicio: number, cantidad: number, listaCupones: number[] = []) {
    for (let i = valorInicio; listaCupones.length < cantidad; i++) {
      if (i % 2 !== 0) { continue; }
      listaCupones.push(i);
    }
    return listaCupones;
  }
}
