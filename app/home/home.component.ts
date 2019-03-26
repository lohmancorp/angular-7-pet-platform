import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { Sku } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Sku } from '../_models';
import { SkuService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent {
    currentUser: User;
    userFromApi: User;
    skus: Sku[] = [];
    public searchText : string;
    public skus : any;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private skuService: SkuService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => { 
            this.userFromApi = user;
        });

        this.skuService.getAll().pipe(first()).subscribe(skus => { 
            this.skus = skus; 
        });
    }
}

