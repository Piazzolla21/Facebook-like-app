import { Component,OnInit,HostBinding,Input,OnDestroy } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  //prendo in input dal altro componente il post
  @Input() post:Post;
  public show:boolean = false;
  constructor(){
    
  }
  ngOnDestroy(): void {
      
      
  }
  ngOnInit(): void {
    
  }
  mostra():void{
    //mostro ng container
    this.show = !this.show;

  }
  aggiungiCommento(scrittore: HTMLInputElement, commento: HTMLInputElement):void{
    console.log(`Adding article title: ${scrittore.value} and link: ${commento.value}`);
    //creo un commento
    this.post.commenti.push({'scrittore' : scrittore.value,'comment' : commento.value});
    console.log(this.post.commenti);
    scrittore.value = ""
    commento.value = ""
  }
  like():void{
    //aggiungo un miPiace
    this.post.miPiace += 1
  }
  
}
