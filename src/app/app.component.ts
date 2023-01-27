import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Post[];
  title = 'Facebook-like-app';
  
  constructor(){
    this.post = [];

  }
  ngOnInit(): void {
  
   
  }
  invio(autore: HTMLInputElement, desc: HTMLInputElement):void {
    console.log(`Adding article title: ${autore.value} and link: ${desc.value}`);
    this.post.push(new Post(autore.value, desc.value,));
    console.log(this.post);
  }
}
