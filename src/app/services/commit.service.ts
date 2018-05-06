import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Commit } from '../models/commit.model';

@Injectable()
export class CommitService {

  constructor(private http: HttpClient) { }

  getCommitListByRepo (username: string, reponame: string) {
    return this.http.get<Commit[]>('https://api.github.com/repos/' + username + '/' + reponame + '/commits', { observe: 'response' }).pipe(
      map((res: HttpResponse<Commit[]>) => {
        return {commits: res.body, paging: this.parse_link_header(res.headers.get('link'))};
      }) 
    );
  }

  getCommitListByURL (pageURL: string) {
    return this.http.get<Commit[]>(pageURL, { observe: 'response' }).pipe(
      map((res: HttpResponse<Commit[]>) => {
        return {commits: res.body, paging: this.parse_link_header(res.headers.get('link'))};
      }) 
    );
  }

  private parse_link_header(header) {
    var links = {};
    if (header) {
      // Split parts by comma
      var parts = header.split(',');
      // Parse each part into a named link
      for(var i=0; i<parts.length; i++) {
          var section = parts[i].split(';');
          if (section.length !== 2) {
              throw new Error("section could not be split on ';'");
          }
          var url = section[0].replace(/<(.*)>/, '$1').trim();
          var name = section[1].replace(/rel="(.*)"/, '$1').trim();
          links[name] = url;
      }
    }
    return links;
  }
}
