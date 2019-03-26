import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { Feature } from '../_models';
import { FeatureService } from '../_services';


@Component({templateUrl: 'feature.component.html'})
export class FeatureComponent implements OnInit {
    features: Feature[] = [];
    //public searchText : string;

    constructor(private featureService: FeatureService) {}

    ngOnInit() {
        this.featureService.getAll().pipe(first()).subscribe(features => { 
            this.features = features; 
        });
    }
}

