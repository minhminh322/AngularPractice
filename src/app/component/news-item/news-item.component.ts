import { Component, EventEmitter, Input, Output } from '@angular/core';
import { News } from '../interfaces/news.interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.css',
})
export class NewsItemComponent {
  @Input('postNews') postNews!: News;
  @Input('selectedColor') selectedColor!: boolean;
  @Output() emitter = new EventEmitter();

  selectedNews() {
    this.emitter.emit(this.postNews);
  }
}
