import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ParselTypeHttpService } from "./parsel-type-http.service";
import { ParselType } from "./parsel-type";

@Component({
    selector: 'parselTypeView',
    templateUrl: 'parsel-type.template.html',
    providers: [ParselTypeHttpService]
})
export class ParselTypeComponent implements OnInit{

    parsels: ParselType[] = [];

    constructor(private httpService: ParselTypeHttpService) {}

    ngOnInit() {
        this.httpService.getData().subscribe((data: Response) => this.parsels = data.json());
    }

    // Create a Parsel Type
    createConditions: boolean = false;

    createParselType() {
        this.createConditions = true;
    }

    saveParselType() {
        this.createConditions = false;
    }
}
