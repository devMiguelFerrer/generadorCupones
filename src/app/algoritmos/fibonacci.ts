import { Injectable } from '@angular/core';
import { IAlgoritmo } from '../models/algoritmo.model';

@Injectable({
  providedIn: 'root'
})
export class Fibonacci implements IAlgoritmo {
  generarCupones(valorInicio: number, cantidad: number, listaCupones: number[] = []) {
    for (let i = valorInicio; listaCupones.length < cantidad; i++) {
      let aux = i;
      let a = 1;
      let b = 0;
      while (aux >= 0) {
        const temp = a;
        a = a + b;
        b = temp;
        aux--;
      }
      listaCupones.push(a);
    }
    return listaCupones;
  }
}
