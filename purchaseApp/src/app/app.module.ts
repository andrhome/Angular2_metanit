import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {ROUTES} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// App views
import {MainViewModule} from "../views/main-view/main-view.module";
import {MinorViewModule} from "../views/minor-view/minor-view.module";
import {ParselTypeModule} from "../views/parsels-view/parsel-type/parsel-type.module";
import {PostServicesModule} from "../views/parsels-view/post-services/post-services.module";
import {ParselsListModule} from "../views/parsels-view/parsels-list/parsels-list.module";

// App modules/components
import {NavigationModule} from "../views/common/navigation/navigation.module";
import {FooterModule} from "../views/common/footer/footer.module";
import {TopnavbarModule} from "../views/common/topnavbar/topnavbar.module";

@NgModule({
    declarations: [AppComponent],
    imports     : [

        // Angular modules
        BrowserModule,
        HttpModule,

        // Views
        MainViewModule,
        MinorViewModule,
        ParselTypeModule,
        PostServicesModule,
        ParselsListModule,

        // Modules
        NavigationModule,
        FooterModule,
        TopnavbarModule,

        RouterModule.forRoot(ROUTES)
    ],
    providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap   : [AppComponent]
})

export class AppModule {}
