import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Sku } from '../_models';

@Injectable({ providedIn: 'root' })
export class SkuService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Sku[]>(`/skus`);
    }

    getById(id: number) {
        return this.http.get<Sku>(`/skus/${id}`);
    }
}