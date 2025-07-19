import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotTopicsComponent } from './components/hot-topics/hot-topics.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News-Portal';
}
