import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({templateUrl: 'profile.component.html'})
export class ProfileComponent {
    currentUser: User;
    userFromApi: User;
    public searchText : string;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => { 
            this.userFromApi = user;
        });
    }
}

