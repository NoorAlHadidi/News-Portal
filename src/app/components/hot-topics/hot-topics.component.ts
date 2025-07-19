import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article.model';

@Component({
  standalone: false,
  selector: 'app-hot-topics',
  templateUrl: './hot-topics.component.html',
  styleUrls: ['./hot-topics.component.css'],
})
export class HotTopicsComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null;

  constructor(private newsService: NewsService) {
    this.subscription = null;
  }

  ngOnInit(): void {
    this.subscription = this.newsService.getHotTopic().subscribe({
      next: (article: Article | null) => {
        console.log('Hot topic article:', article);
      },
      error: (error) => {
        console.error('Error fetching hot topic:', error);
      },
      complete: () => {
        console.log('Hot topic fetch complete');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log('Unsubscribed from hot topic observable');
  }
}
