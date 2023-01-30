import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  post: Post[];
  title = 'Facebook-like-app';
  image : string = ''
  
  constructor(private http:HttpClient){
    this.post = [];
    this.getdati()
  }
 
  invio(autore: HTMLInputElement, desc: HTMLInputElement):void {
     
    let formdata = new FormData();
    formdata.set('File', this.file);
    console.log(this.file)
    var pos = new Post(autore.value, desc.value)
    pos.setImmagine(this.image)

    this.post.push(pos);
    this.image = ''
    console.log(this.post);
    this.http.post<any>('http://192.168.1.21:8080/add',pos.toString()).subscribe((response)=>{
      console.log(response['info'])
    })
    autore.value = '';
    desc.value = "";
  }

  file : any;
  getfile(event: any){
    var reader = new FileReader();
    var oggetto = this;
    reader.onload = function (e) {
       oggetto.image = e.target.result.toString();
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  getdati(){
    this.http.get<any>('http://192.168.1.21:8080/index').subscribe((response)=>{
      for (let a of response) {
        var x = new Post(a['autore'],a['descrizione'],a['miPiace'],a['commenti'])
        x.setImmagine(a['immagine'])
        console.log(x)
        this.post.push(x)
      }
    })
  }
  ngOnDestroy(): void {
  }
}
