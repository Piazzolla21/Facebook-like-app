export class Post{
    autore : string;
    descrizione : string;
    miPiace : number;
    commenti : string;
    constructor(autore: string, descrizione: string, miPiace?: number, commenti?: string) {
        this.autore = autore;
        this.descrizione = descrizione;
        this.miPiace = miPiace || 0;
        this.commenti = commenti || "";
    }
    voto () :void{
        this.miPiace += 1;
    }
}