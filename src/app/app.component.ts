import { HttpClient } from '@angular/common/http';
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
  
  constructor(private http:HttpClient){
    this.post = [];
    this.getdati()
    
    
  }
 
  invio(autore: HTMLInputElement, desc: HTMLInputElement):void {
     
    let formdata = new FormData();
    formdata.set('File', this.file);
    console.log(this.file)
   /*
    this.http.post('http://localhost:3100/upload/uploadfiles', formdata).subscribe((response)=>{})
    console.log(`Adding article title: ${autore.value} and link: ${desc.value}`);
    */
    
   
    this.post.push(new Post(autore.value, desc.value,));
    console.log(this.post);
  }

  file : any;
  getfile(event: any){
    this.file = event.target.files[0];
    console.log(this.file)
  }
  getdati(){
    this.http.get<any>('http://192.168.1.21:8080/index').subscribe((response)=>{
      for (let a of response) {
        this.post.push(new Post(a['autore'],a['descrizione'],a['miPiace'],a['commenti']))
      }
    })

  }
}
