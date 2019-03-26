import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Faq } from '../_models';

@Injectable({ providedIn: 'root' })
export class FaqService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Faq[]>(`/faqs`);
    }

    getById(id: number) {
        return this.http.get<Faq>(`/faqs/${id}`);
    }
}