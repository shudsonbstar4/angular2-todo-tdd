import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { 'id': 1, 'title': 'Washing the dishes' }
    ];
    return { todos };
  }
}
