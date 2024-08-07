import { Component, EventEmitter, Input, Output } from '@angular/core';
import { article } from '../liste/liste.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  @Input() article: article;

  @Output() ajout: EventEmitter<article> = new EventEmitter<article>();
  @Output() supprime: EventEmitter<number> = new EventEmitter<number>();

  ajoutArticle() {
    this.ajout.emit(this.article);
  }

  supprimeArticle() {
    this.supprime.emit(this.article.id);
  }
}
