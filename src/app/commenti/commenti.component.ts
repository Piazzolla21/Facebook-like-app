import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent {
  @Input() commenti : {'scrittore':string,'comment':string};


}
