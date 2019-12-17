import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TSalidaCupones {
  private numeroDigitosCupon = 6;
  convertir(listaCupones) {
    listaCupones.forEach((numeroCupon, idx) => {
      while (String(numeroCupon).length < this.numeroDigitosCupon) {
        numeroCupon = `0${numeroCupon}`;
      }
      listaCupones[idx] = numeroCupon;
    });
    return listaCupones;
  }
}
