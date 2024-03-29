import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-pokemon-pagination',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './pokemon-pagination.component.html',
  styleUrl: './pokemon-pagination.component.css'
})

export class PokemonPaginationComponent {
    /** The total number of pokemon */
    @Input()
    collectionSize = 0;
  
    /** The number of records to display */
    @Input()
    pageSize = 30;
  
    /** Current page */
    @Input()
    currentPage = 1;
  
    /** The number of buttons to show either side of the current page */
    @Input()
    maxSize = 1;
  
    /** Display the First/Last buttons */
    @Input()
    firstLastButtons = false;
  
    /** Display the Next/Previous buttons */
    @Input()
    nextPreviousButtons = true;
  
    /** Display small pagination buttons */
    @Input()
    small = false;

    totalPages: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  /** Set page number */
  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  /** Set next page number */
  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  /** Set previous page number */
  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
