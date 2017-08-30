import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let todoService: any = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  beforeEach(inject([TodoService], (service: TodoService) => {
    todoService = TodoService;
  }));

  it('should initialize the service', () => {
    expect(todoService).toBeTruthy();
  });
});
