import { Injectable } from '@angular/core';
import { Post } from './Post';
// added 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  // constructor() { }

  // constructor is used
  // http is injected to service!
  // http object is instantiated,it is a reference!
  constructor(private http: HttpClient) { }


  // functions defiend to return data as a service method
  // it will deliver data to any component that call it

  // returns data of type "Post"
  getStaticPost(): Post {
    return {
      userId: 1,
      id: 1,
      title: "title",
      body: "body..."
    }
  }

  // returns a stream of data of type "Post" asynchronously
  getLivePosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
