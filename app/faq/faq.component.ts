import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { Faq } from '../_models';
import { FaqService } from '../_services';


@Component({templateUrl: 'faq.component.html'})
export class FaqComponent implements OnInit {
    faqs: Faq[] = [];
    public searchText : string;

    constructor(private faqService: FaqService) {}

    ngOnInit() {
        this.faqService.getAll().pipe(first()).subscribe(faqs => { 
            this.faqs = faqs; 
        });
    }
}

