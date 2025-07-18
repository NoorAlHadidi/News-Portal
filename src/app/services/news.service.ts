import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, of } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = 'db303a2c63824c7ab90c76f1eb36628d';
  private apiUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  getHotTopic(): Observable<Article | null> {
    var hotTopicUrl = `${this.apiUrl}/top-headlines`;
    const params = {
      language: 'en',
      pageSize: '1',
      apiKey: this.apiKey,
    };

    return this.http.get<{ articles: Article[] }>(this.apiUrl, { params }).pipe(
      map((response) => response.articles[0]),
      tap((article) => console.log('[NewsService] Hot topic:', article)),
      catchError((error) => {
        console.error('[NewsService] Error:', error);
        return of(null);
      })
    );
  }
}
