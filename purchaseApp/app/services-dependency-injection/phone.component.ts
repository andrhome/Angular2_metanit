import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Phone } from './phone';

@Component({
    selector: 'phone-comp',
    templateUrl: 'app/services-dependency-injection/phone-template.html',
    providers: [DataService]
})
export class PhoneComponent implements OnInit {
    items: Phone[] = [];
    constructor(private dataService: DataService) {}

    addItem(name: string, price: number) {
        this.dataService.addData(name, price);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}