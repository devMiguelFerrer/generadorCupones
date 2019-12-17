import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Secuencial } from '../algoritmos/secuencial';
import { Pares } from './../algoritmos/pares';
import { Fibonacci } from '../algoritmos/fibonacci';
import { IConfig } from '../models/config.model';
import { Observable } from 'rxjs';
import { TSalidaCupones } from '../utils/transformarSalidaCupon';


@Injectable({
  providedIn: 'root'
})
export class GenerarCuponesService {

  private RUTA = './assets/config.json';
  private valorInicial = 1;

  constructor(
    private secuencial: Secuencial,
    private pares: Pares,
    private fibonacci: Fibonacci,
    private salidaCupones: TSalidaCupones,
    private http: HttpClient
  ) {
    this.cargarConfig();
  }

  private cargarConfig(): Observable<any> {
    return this.http.get(this.RUTA);
  }

  public generarCupones() {
    return this.cargarConfig().pipe(
      map((respConfig: IConfig) => {
        const cuponesNumeros = this[respConfig.algoritmo].generarCupones(this.valorInicial, respConfig.cantidad);
        return this.salidaCupones.convertir(cuponesNumeros);
      })
    );
  }

}
