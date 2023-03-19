import { Component } from '@angular/core';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

   termino: string = '';
   hayError: boolean = false;

   constructor( private PaisService: PaisService) {}

   buscar() {
    this.hayError = false;
    console.log(this.termino);
     
    this.PaisService.buscarPais( this.termino).subscribe( (paises) =>{
      console.log(paises);

    }, (err) => {
      this.hayError = true;
    });

   }

}
