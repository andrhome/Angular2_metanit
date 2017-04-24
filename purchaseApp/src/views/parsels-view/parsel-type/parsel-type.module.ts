import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ParselTypeComponent } from "./parsel-type.component";
import { HttpModule } from '@angular/http';
import { CreateParselTypeComponent } from './create-parsel-type.component'

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [ParselTypeComponent, CreateParselTypeComponent]
})
export class ParselTypeModule {}
