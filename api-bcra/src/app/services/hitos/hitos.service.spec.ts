import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HitosService } from './hitos.service';
import { of } from 'rxjs';

describe('HitosService', () => {
  let service: HitosService;
  let HttpClientSpy: {
    get: jasmine.Spy; post: jasmine.Spy 
}
  const mockHitoMilestone =
  {
      "d": "1991-02-05",
      "e": "Roque Fernández",
      "t": "bcra"
  };
  
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(HitosService);
  // });
  beforeEach(() => {
    HttpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    
    service = new HitosService(HttpClientSpy as any);
  });

  it('se crea el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });
  
  it('#hitos espero un valor',
    (done: DoneFn) => {
    HttpClientSpy.get.and.returnValue(of(mockHitoMilestone));
    service.hitos().subscribe(value => {

      expect(value).toEqual(mockHitoMilestone);
      done();
      }
    );
  });
  
});
