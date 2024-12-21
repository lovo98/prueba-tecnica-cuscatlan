import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  searchTerm: string = '';
  private debounceTimer: any;
  @Output() search = new EventEmitter<string>();

  onSearch() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.search.emit(this.searchTerm);
    }, 300);
  }

  ngOnDestroy(): void {
    clearTimeout(this.debounceTimer);
  }
}
