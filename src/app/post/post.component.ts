import { Component,OnInit,HostBinding,Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit   {
  @Input() post:Post;
  public show:boolean = false;
  constructor(
    
  ){

  }
  ngOnInit(): void {
    
  }
  mostra():void{
    this.show = !this.show;

  }
  aggiungiCommento(scrittore: HTMLInputElement, commento: HTMLInputElement):void{
    console.log(`Adding article title: ${scrittore.value} and link: ${commento.value}`);
    this.post.commenti.push({'scrittore' : scrittore.value,'comment' : commento.value});
    console.log(this.post.commenti);
  }
  like():void{
    this.post.miPiace += 1
  }
}
