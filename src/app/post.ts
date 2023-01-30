import { HttpClient } from '@angular/common/http';

export class Post{
    autore : string;
    descrizione : string;
    miPiace : number;
    commenti : {'scrittore':string,'comment':string}[];
    immagine: string;
    
    constructor(autore: string, descrizione: string, miPiace?: number, commenti?: {'scrittore':string,'comment':string}[],immagine?:string) {
        this.autore = autore;
        this.descrizione = descrizione;
        this.miPiace = miPiace || 0;
        this.commenti = commenti || [];
        this.immagine = immagine || '';
    }
    /*constructor(private http:HttpClient){
        this.autore = '';
        this.descrizione = '';
        this.miPiace =  0;
        this.commenti = [];
        this.immagine =  '';
    }*/
    setAutore(autore){
        this.autore = autore;
    }
    setDescrizione(desc){
        this.descrizione = desc;
    }
    setmiPiace(like){
        this.miPiace = like
    }
    setImmagine(immagine: string){
        console.log(immagine)
        this.immagine = immagine;
        
    }
    voto () :void{
        this.miPiace += 1;
    }
    toString() : any{
        return {autore: this.autore, descrizione: this.descrizione, miPiace: this.miPiace,commenti:this.commenti,immagine : this.immagine}
    }
}