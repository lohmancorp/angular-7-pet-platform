import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Feature } from '../_models';

@Injectable({ providedIn: 'root' })
export class FeatureService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Feature[]>(`/features`);
    }

    getById(id: number) {
        return this.http.get<Feature>(`/features/${id}`);
    }
}