import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  post(url: string, data: any,) {
    return this.http.post<any>(`${environment.API_ENDPOINT + url}`, data, {headers: AppService.headers()});
  }

  get(url: string,) {
    return this.http.get<any>(`${environment.API_ENDPOINT + url}`, {headers: AppService.headers()});
  }

  put(url: string, data: any,) {
    return this.http.put<any>(`${environment.API_ENDPOINT + url}`, data, {headers: AppService.headers()});
  }

  delete(url: string,) {
    return this.http.delete<any>(`${environment.API_ENDPOINT + url}`, {headers: AppService.headers()});
  }


  static headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
}
