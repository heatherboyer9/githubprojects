import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Commit } from '../models/commit.model';

@Injectable()
export class CommitService {

  constructor(private http: HttpClient) { }

  getCommitListByRepo (username: string, reponame: string): Observable<Commit[]> {
    return this.http.get<Commit[]>('https://api.github.com/repos/' + username + '/' + reponame + '/commits').pipe(
      map((res: Commit[]) => {
        return res;
      }) 
    );
  }
}
