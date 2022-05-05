import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HitosService } from 'src/app/services/hitos/hitos.service';

@Component({
  selector: 'app-hitos',
  templateUrl: './hitos.component.html',
  styleUrls: ['./hitos.component.less']
})
export class HitosComponent implements OnInit {
  resultado:any=[];
  formularioBusqueda = new FormGroup({
    personaje: new FormControl(''),
    fecha: new FormControl(''),
    institucion: new FormControl('')
  });

  constructor(private hitosService:HitosService) { 
    this.hitosService.hitos()
    .subscribe(
      data => {
          this.resultado = data;

          console.log(data.total);
      }
    );
  }

  ngOnInit(): void {
    console.log(this.resultado);
  }

}
