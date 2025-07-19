import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article.model';

@Component({
  standalone: false,
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null;
  latestArticles: Article[] | null;

  constructor(private newsService: NewsService) {
    this.subscription = null;
    this.latestArticles = null;
  }

  ngOnInit(): void {
    this.subscription = this.newsService.getLatestNews().subscribe({
      next: (articles: Article[] | null) => {
        this.latestArticles = articles;
        console.log('Latest news articles:', articles);
      },
      error: (error) => {
        console.error('Error fetching latest news:', error);
      },
      complete: () => {
        console.log('Latest news fetch complete');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log('Unsubscribed from latest news observable');
  }
}
