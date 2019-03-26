import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User, Role, Sku, Features, Faq } from '../_models';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: User[] = [
            { id: 1, username: 'admin', password: 'admin', firstName: 'Taylor', lastName: 'Giddens', email: 'taylor.email@ingrammicro.com', phone: '+359.88.967.5555', mobile: '+359.88.967.5555', location: 'Sofia, Bulgaria', team: 'Platform PdM', website: 'ingrammicroclud.com', image: 'https://i.pinimg.com/280x280_RS/60/e0/fe/60e0fe51a25b64430f5632af1beaec56.jpg', role: Role.AppAdmin, status: 'active'},
            { id: 2, username: 'skuadmin', password: 'admin', firstName: 'Georg', lastName: 'Stumpf', email: 'georg.email@ingrammicro.com', phone: '+359.88.967.5555', mobile: '+359.88.967.5555', location: 'Irvine, CA, USA', team: 'Platform Programs', website: 'ingrammicroclud.com', image: 'https://avatars.schd.ws/E/9F/3590331/avatar.jpg.320x320px.jpg', role: Role.SkuAdmin, status: 'active' },
            { id: 3, username: 'user', password: 'user', firstName: 'Adonay', lastName: 'Cervantes', email: 'adonay.email@ingrammicro.com', phone: '+359.88.967.5555', mobile: '+359.88.967.5555', location: 'Mexico City, Mexico', team: 'Sales', website: 'cloudblue.com', image: 'https://pbs.twimg.com/profile_images/1025792263539118080/1mBXpD0b_400x400.jpg', role: Role.AppUser, status: 'active' }
        ];

        const skus: Sku[] = [
            { 
              id: 1, 
              mpnID: '95ac-f54f74e9a239', 
              skuID: '91fd106f-4b2c-4938-95ac-f54f74e9a239', 
              skuName: 'Office 365 Enterprise E1', 
              skuDescription: 'The online versions of Office with email, instant messaging, HD video conferencing, plus 1 TB personal file storage and sharing. Does not include the Office suite for PC or Mac.', 
              skuVendor: 'Microsoft', 
              skuCategory: 'Communication and Collaboration', 
              skuUnit: 'per item', 
              skuTerm: '12', 
              skuBilling: 'Monthly', 
              skuMinimum: 0, 
              skuMaximum: 500,
              skuVendorListPrice: 8.00,
              skuVendorCost: 6.40,
              skuVARMargin: 9.1,
              skuSearchTags: ['O365', 'O365 E1']
              },
              { 
              id: 2, 
              mpnID: 'a17c-eba730d49c02', 
              skuID: '796b6b5f-613c-4e24-a17c-eba730d49c02', 
              skuName: 'Office 365 Enterprise E3', 
              skuDescription: 'The Office suite for PC and Mac with apps for tablets and phones, plus email, instant messaging, HD video conferencing, 1 TB personal file storage and sharing, and available add-ons like PSTN calling.', 
              skuVendor: 'Microsoft', 
              skuCategory: 'Communication and Collaboration', 
              skuUnit: 'per item', 
              skuTerm: '12', 
              skuBilling: 'Monthly', 
              skuMinimum: 0, 
              skuMaximum: 500,
              skuVendorListPrice: 20.00,
              skuVendorCost: 16.00,
              skuVARMargin: 9.1,
              skuSearchTags: ['O365', 'O365 E3']
              },
              { 
              id: 3, 
              mpnID: '8086-a3a3b506fac2', 
              skuID: 'a044b16a-1861-4308-8086-a3a3b506fac2', 
              skuName: 'Office 365 Enterprise E5', 
              skuDescription: 'The Office suite, plus email, instant messaging, HD video conferencing, 1 TB personal file storage and sharing, and advanced security, analytics and PSTN conferencing.', 
              skuVendor: 'Microsoft', 
              skuCategory: 'Communication and Collaboration', 
              skuUnit: 'per item', 
              skuTerm: '12', 
              skuBilling: 'Monthly', 
              skuMinimum: 0, 
              skuMaximum: 500,
              skuVendorListPrice: 35.00,
              skuVendorCost: 28.40,
              skuVARMargin: 18.9,
              skuSearchTags: ['O365', 'O365 E5']
              }

        ];

        const offers: Offer[] = [

        ];

        const features: Feature[] = [
            { id: 1, featureName: "Ingram Micro Cloud Catalog", featureDescription: "Gain access to the entire Ingram Micro Cloud SaaS & XaaS ecosystem.", cmp: true, connect: true, paas: true},
            { id: 2, featureName: "Private Marketplace", featureDescription: "We host your private white-labeled Marketplace.", cmp: true, connect: false, paas: true},
            { id: 3, featureName: "Your XaaS", featureDescription: "Add your services into the catalog to offer your own services along side IMC services. ", cmp: false, connect: true, paas: true},
            { id: 4, featureName: "Custom Offers & Bundles", featureDescription: "Create your own custom offers that combine services from IMC and your own services.. ", cmp: false, connect: false, paas: true}
        ];

        const faqs: Faq[] = [
            { id: 1, faqQuestion: 'Can I have a private marketplace with CMP', faqAnswer: 'Yes.', faqCategory: 'CMP', faqPositive: true},
            { id: 2, faqQuestion: 'Can I bring my own license to purchase from vendors directly with CMP', faqAnswer: 'No.  The PaaS level of service is required.', faqCategory: 'CMP', faqPositive: false},
            { id: 3, faqQuestion: 'I don\'t see my country in the list of location with a Cloud Marketplace.  Can I still sign up for CMP', faqAnswer: 'No.  The PaaS level of service is required.', faqCategory: 'CMP', faqPositive: false},
            { id: 4, faqQuestion: 'Can I sell my own services through Cloud Marketplace', faqAnswer: 'No.  The PaaS level of service is required.', faqCategory: 'CMP', faqPositive: false},
        ];


        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        const roleString = isLoggedIn && authHeader.split('.')[1];
        const role = roleString ? Role[roleString] : null;

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate - public
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const user = users.find(x => x.username === request.body.username && x.password === request.body.password && x.status ==='active');
                if (!user) return error('Username or password is incorrect or your user is not active.');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone,
                    mobile: user.mobile,
                    location: user.location,
                    team: user.team,
                    website: user.website,
                    image: user.image,
                    role: user.role,
                    status: user.status,
                    token: `fake-jwt-token.${user.role}`
                });
            }

            // get user by id - admin or user (user can only access their own record)
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                if (!isLoggedIn) return unauthorised();

                // get id from request url
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);

                // only allow normal users access to their own record
                const currentUser = users.find(x => x.role === role);
                if (id !== currentUser.id && role !== Role.AppAdmin) return unauthorised();

                const user = users.find(x => x.id === id);
                return ok(user);
            }

            if (request.url.match(/\/skus\/\d+$/) && request.method === 'GET') {
                if (!isLoggedIn) return unauthorised();

                // get id from request url
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);

                // only allow normal users access to their own record
                const currentUser = users.find(x => x.role === role);
                if (id !== currentUser.id && role !== Role.SkuAdmin) return unauthorised();

                const sku = skus.find(x => x.skuID === skuID);
                return ok(sku);
            }

            // get all users (admin only)
            if (request.url.endsWith('/users') && request.method === 'GET') {
                if (role !== Role.AppAdmin) return unauthorised();
                return ok(users);
            }
            // get all skus (admin only)
            if (request.url.endsWith('/skus') && request.method === 'GET') {
                //if (role !== Role.SkuAdmin) return unauthorised();
                return ok(skus);
            }

            if (request.url.endsWith('/features') && request.method === 'GET') {
                //if (role !== Role.SkuAdmin) return unauthorised();
                return ok(features);
            }

            if (request.url.endsWith('/faqs') && request.method === 'GET') {
                //if (role !== Role.SkuAdmin) return unauthorised();
                return ok(faqs);
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))
        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());

        // private helper functions

        function ok(body) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorised() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function error(message) {
            return throwError({ status: 400, error: { message } });
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};