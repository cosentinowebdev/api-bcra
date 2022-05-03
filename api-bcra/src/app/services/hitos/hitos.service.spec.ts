import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HitosService } from './hitos.service';

describe('HitosService', () => {
  let service: HitosService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(HitosService);
  // });
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule]});
    service = TestBed.inject(HitosService);
  });

  it('se crea', () => {
    expect(service).toBeTruthy();
  });
  
  it('#hitos espero un valor',
    (done: DoneFn) => {
    service.hitos().subscribe(value => {
      expect(value.getValue()[0]).toBe({d: '1991-02-05', e: 'Roque Fernández', t: 'bcra'});
      done();
      }
    );
  });
});
