import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HitosService {
  token:any;
  auth_token:any;
  errorMessage:any;


  constructor(private http: HttpClient) { 

  }

  hitos():Observable<any>{
    return this.http.get(`${environment.apiUrl}milestones`).pipe(
      tap(
        (res:any)=>{
          console.log(res);
          return res;
        }
      )
    );

  }

}
