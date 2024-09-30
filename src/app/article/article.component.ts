import { Component, HostBinding, Input } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input({ required: true }) article!: Article;

  voteUp() {
    this.article.voteUp();
  }

  voteDown() {
    this.article.voteDown();
  }
}
