import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  Subscription,
} from 'rxjs';

const SEARCH_DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnDestroy, OnInit {
  searchTerm = '';
  private searchSubject = new Subject<string>();
  private subscription: Subscription = new Subscription();

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.subscription = this.searchSubject
      .pipe(debounceTime(SEARCH_DEBOUNCE_TIME), distinctUntilChanged())
      .subscribe((term) => {
        this.search.emit(term);
      });
  }

  onSearchChange() {
    this.searchSubject.next(this.searchTerm);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
