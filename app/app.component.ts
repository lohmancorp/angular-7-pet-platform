import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './_content/app.less';
import './_content/modal.less';

import { AuthenticationService } from './_services';
import { User, Role } from './_models';


@Component({ selector: 'app', 
    templateUrl: 'app.component.html' })
    
export class AppComponent implements OnInit {
    currentUser: User;
    public searchText : string;
    public skus : any;


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.AppAdmin;
    }

    get isSkuAdmin() {
        return this.currentUser && this.currentUser.role === Role.SkuAdmin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}