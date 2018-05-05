import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { CommitListComponent } from './components/commit-list/commit-list.component';
import { CommitItemComponent } from './components/commit-item/commit-item.component';
import { RepoService } from './services/repo.service';
import { CommitService } from './services/commit.service';


@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    CommitListComponent,
    CommitItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RepoService,
    CommitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
