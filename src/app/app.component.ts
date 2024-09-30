import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { Article } from './article.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 18', 'http://angular.io', 10),
      new Article('React', 'http://reactjs.org', 20),
      new Article('Vue.js', 'http://vuejs.org', 15),
      new Article('Svelte', 'http://svelte.dev', 5),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    const article = new Article(title.value, link.value);
    this.articles.push(article);
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort(
      (a1: Article, a2: Article) => a2.votes - a1.votes
    );
  }
}
