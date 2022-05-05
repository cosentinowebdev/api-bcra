import { Component, OnInit } from '@angular/core';
import { HitosService } from 'src/app/services/hitos/hitos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  errorMessage: any;

  constructor(private hitosService:HitosService) { 
    // this.hitosService.hitos()
    // .subscribe(
    //   data => {
    //       const resultado = data.total;
    //       console.log(resultado);
    //   }
    // );
  }

  ngOnInit(): void {
  }

}
