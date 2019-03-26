import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ProfileComponent } from './profile';
import { CatalogComponent } from './catalog';
import { FeatureComponent } from './feature';
import { FaqComponent } from './faq';
import { AdminComponent } from './admin';
import { SkuComponent } from './sku';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { Role } from './_models';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'catalog', 
        component: CatalogComponent, 
        canActivate: [AuthGuard], 
    },
    { 
        path: 'features', 
        component: FeatureComponent, 
        canActivate: [AuthGuard], 
    },
    { 
        path: 'faqs', 
        component: FaqComponent, 
        canActivate: [AuthGuard], 
    },
    { 
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.AppAdmin] } 
    },
    { 
        path: 'sku', 
        component: SkuComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.SkuAdmin, Role.AppAdmin] } 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);