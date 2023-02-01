import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  //creo un array di tipo post
  post: Post[];
  image : string = ''
  
  constructor(private http:HttpClient){
    //inizializzo l array
    this.post = [];
    //chiamo il metodo getdata
    this.getdati()
  }
 
  invio(autore: HTMLInputElement, desc: HTMLInputElement):void {
    //prendo il file 
    let formdata = new FormData();
    formdata.set('File', this.file);
    console.log(this.file)
    //creo un nuovo post
    var pos = new Post(autore.value, desc.value)
    //metto l immagine al post
    pos.setImmagine(this.image)
    //lo aggiungo all array
    this.post.push(pos);
    //resetto la variabile
    this.image = ''
    console.log(this.post);
    //faccio la richiesta post per salvare il post sul db
    this.http.post<any>('http://192.168.1.21:8080/add',pos.toString()).subscribe((response)=>{
      console.log(response['info'])
    })
    autore.value = '';
    desc.value = "";
  }

  file : any;
  getfile(event: any){
    //creo un file reader
    var reader = new FileReader();
    //assegno una variabile al this perche all interno il this si rifererebbe al reader
    var oggetto = this;
    //trasformo l immagine in una stringa
    reader.onload = function (e) {
       oggetto.image = e.target.result.toString();
    };
    //eseguo la funzione
    reader.readAsDataURL(event.target.files[0]);
  }

  getdati(){
    //faccio una richiesta get per ottenere i post dal db
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
