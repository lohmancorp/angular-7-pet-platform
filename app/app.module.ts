import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);
import { ArchwizardModule } from 'ng2-archwizard';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { ProfileComponent } from './profile';
import { CatalogComponent } from './catalog';
import { AdminComponent } from './admin';
import { SkuComponent } from './sku';
import { FeatureComponent } from './feature';
import { FaqComponent } from './faq';
import { LoginComponent } from './login';
import { GrdFilterPipe } from './_helpers/grd-filter.pipe';
import { ModalComponent } from './_directives';
import { ModalService } from './_services';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule,
        NgbModule,
        FontAwesomeModule,
        ArchwizardModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        CatalogComponent,
        FaqComponent,
        ModalComponent,
        AdminComponent,
        SkuComponent,
        FeatureComponent,
        LoginComponent,
        GrdFilterPipe
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend
        fakeBackendProvider,
        ModalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }