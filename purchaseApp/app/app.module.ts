import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { BoldComponent } from './bold-directive/bold.component';
import { BoldDirective } from './bold-directive/bold.directive';
import { NgIf } from './ngif-directive/ngif.component';
import { WhileComponent } from './while-structure-directive/while.component';
import { WhileDirective } from './while-structure-directive/while.directive';
import {PhoneComponent} from "./services-dependency-injection/phone.component";
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        BoldDirective,
        BoldComponent,
        NgIf,
        WhileDirective,
        WhileComponent,
        PhoneComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}