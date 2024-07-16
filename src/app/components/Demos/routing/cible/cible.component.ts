import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cible',
  standalone: true,
  imports: [],
  templateUrl: './cible.component.html',
  styleUrl: './cible.component.css'
})
export class CibleComponent {
  info! : number

  constructor(
    private ar : ActivatedRoute
  ){
    this.info = ar.snapshot.params["info"]
  }
}
