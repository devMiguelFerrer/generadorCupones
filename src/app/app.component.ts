import { GenerarCuponesService } from './providers/generar-cupones.service';
import { Secuencial } from './algoritmos/secuencial';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaCupones: string[];

  constructor(private secuencial: Secuencial, public gc: GenerarCuponesService) {
    this.gc.generarCupones().subscribe(
      (respGeneradorCupones: string[]) => {
        console.log(respGeneradorCupones);
        this.listaCupones = respGeneradorCupones;
      },
      err => console.warn(`Error: ${err}`),
      () => console.log('Completado'));
  }

}
