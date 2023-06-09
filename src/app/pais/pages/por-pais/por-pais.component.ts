import { Component } from '@angular/core';
import { PaisService } from '../../service/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

   termino: string = '';
   hayError: boolean = false;
   paises  : Country[] = [];

   constructor( private PaisService: PaisService) {}

   buscar() {
    this.hayError = false;
    console.log(this.termino);
     
    this.PaisService.buscarPais( this.termino).subscribe( (paises) =>{
      console.log(paises);
      this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises   = [];
    });

   }

}
