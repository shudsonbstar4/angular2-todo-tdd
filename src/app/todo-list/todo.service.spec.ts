import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let mockBackend;
  const mockResponse = {
    data: [
       { 'id': 1, 'title': 'Washing the dishes' }
    ]
  };
  let todoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        TodoService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  beforeEach(inject([TodoService, XHRBackend], (service: TodoService, backend: MockBackend) => {
    todoService = service;
    mockBackend = backend;
  }));

  it('should initialize the service', () => {
    expect(todoService).toBeTruthy();
  });

  // Note: we have to use the async wrapper in order to mock promise resolution/server response
  it('should return the list of todo items', async(() => {

    // we have to use mockbackend to mimic an API call when we don't have a backend set up
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    todoService.index()
      .then((todoList) => {
        expect(todoList.length).toEqual(1);
      });
  }));
});
