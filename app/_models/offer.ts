export class Offer {
    id: number;
    mpnID: string;
    skuID: string;
    offerName: string;
    offerDescription: string;
    offerVendor: string;
    offerCategory: string;
    offerUnit: string;
    offerTerm: number;
    offerBilling: string;
    offerSetupCost: number;
    offerCost: number;
    offerSetupPrice: number;
    offerPrice: number;
    offerMinimum: number;
    offerMaximim: number;
    skus: [];
}