import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private todoAPI = 'api/todos';

  constructor(
    private http: Http
  ) { }

  public index(): Promise<any> {
    return this.http.get(this.todoAPI)
     .toPromise()
     .then(response => response.json().data as any)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
