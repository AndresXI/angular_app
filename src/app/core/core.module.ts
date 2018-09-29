import { AppRoutingModule } from './../app-routing.module';
import { SharedMoudlue } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";


@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedMoudlue,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ]
})
export class CoreModule{
    
}