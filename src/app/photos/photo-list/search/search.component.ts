import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit{
    
    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();

    

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300)).
            subscribe( filter => this.onTyping.emit(filter) );
    }


    OnDestroy():void {
       this.debounce.unsubscribe(); 
    }

    getValue(event: Event): string {
        return (event.target as HTMLInputElement).value;
      }
}