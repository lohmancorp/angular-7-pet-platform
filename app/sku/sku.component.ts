import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ModalService } from '../_services';
import { first } from 'rxjs/operators';
import { Sku } from '../_models';
import { SkuService } from '../_services';


@Component({templateUrl: 'sku.component.html'})
export class SkuComponent implements OnInit {
    skus: Sku[] = [];
    public searchText : string;

    constructor(private modalService: ModalService, private skuService: SkuService) {}

    ngOnInit() {
        this.skuService.getAll().pipe(first()).subscribe(skus => { 
            this.skus = skus; 
        });
    }
    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
    
    getSkuByID(id: string) {
        this.skuService.getById(id).pipe(first()).subscribe(sku => { 
            this.sku = sku; 
        });
    }
}

