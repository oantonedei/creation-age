import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, TemplateRef } from '@angular/core';
import { IPaginated } from '@common/models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, OnDestroy {
  @Input() data?: IPaginated<T>;
  @Input() pageSize!: number;
  @Input() isLoading: boolean = false;
  @Input() headTemplate!: TemplateRef<any>;
  @Input() rowTemplate!: TemplateRef<any>;
  @Input() pageUpdated$!: Observable<number>;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  page!: number;
  pageUpdatedSub!: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  ngOnInit(): void {
    this.page = this.data?.currentPage ?? 1;
    if(this.pageUpdated$){
      this.pageUpdatedSub = this.pageUpdated$.subscribe(page=>{
        this.page = page;
      });
    }
  }

  onPageChange(page: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.page = this.data!.currentPage!;
        this.pageChange.emit(page);
      }, 10);
    }
  }

  ngOnDestroy(): void {
    if(this.pageUpdatedSub){
      this.pageUpdatedSub.unsubscribe();
    }
  }
}
