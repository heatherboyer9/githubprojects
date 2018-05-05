import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Repo } from '../models/repo.model';

@Injectable()
export class RepoService {

  constructor(private http: HttpClient) { }

  getRepoListByUser (username : string): Observable<Repo[]> {
    //sort by recently updated
    return this.http.get<Repo[]>('https://api.github.com/users/' + username + '/repos?sort=update&order=desc').pipe(
      map((res: Repo[]) => {
        return res;
      }) 
    );
  }

}
