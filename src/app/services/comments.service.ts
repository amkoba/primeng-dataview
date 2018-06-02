import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }
  getComments(offset, limit): Observable<any>{
    let comments;
    return this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(map((res: Response) => {
        comments = res;
        const total = comments.length;
        //offset and limit will be done by server side but currently we don't have our own server. So this is done here.
        return {comments: comments.slice(offset, limit + offset), total: total};
    }));
}
}
