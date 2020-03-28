// import { Component } from '@angular/core';

// OnInit, OnDestroy are added
import { Component, OnInit, OnDestroy } from '@angular/core';
//service file is imported
import { DataManagerService } from './data-manager.service';
//custom Post dataType file is imported
import { Post } from './Post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// implements OnInit, OnDestroy added
export class AppComponent implements OnInit, OnDestroy {
  title = 'ngApp7';

  // local variable is declared
  // it will store reciving data from service
  // by call to mthod of the service objet
  staticPost: Post;

  posts: Array<Post>;
  // make the subscription reference "private"
  private livePostsSub;

  // constructor is used
  // serviceß is injected to service!
  // service object is instantiated,it is a reference!
  constructor(private data: DataManagerService) { }


  ngOnInit() {
    //call service obect/method 
    // assigne and store to local variable data returned by service obect/method 
    this.staticPost = this.data.getStaticPost();
    this.livePostsSub = this.data.getLivePosts().subscribe(Objects => this.posts = Objects);
  }

  ngOnDestroy() {
    this.livePostsSub.unsubscribe();
  }

}
