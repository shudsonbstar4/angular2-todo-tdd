import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  index(): Promise<any> {
    let items = [{ 'id': 1, 'title': 'Washing the dishes' }];
    return Promise.resolve(items);
  }

}
