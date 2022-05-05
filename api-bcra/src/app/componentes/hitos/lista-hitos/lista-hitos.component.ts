import { Component, OnInit } from '@angular/core';
import { HitosService } from 'src/app/services/hitos/hitos.service';

@Component({
  selector: 'app-lista-hitos',
  templateUrl: './lista-hitos.component.html',
  styleUrls: ['./lista-hitos.component.less']
})
export class ListaHitosComponent implements OnInit {
  resultado: any;

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
  }

}
