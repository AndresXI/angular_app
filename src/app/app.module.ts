import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedMoudlue } from './shared/shared.module';
import { AuthMoudule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
 

@NgModule({
  /** All the components, directives, and pipes this module uses */
  declarations: [
    // this declarations array should always look like this 
    AppComponent
  ],
  /** The other modules this module uses */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, 
    ShoppingListModule,
    AuthMoudule,
    CoreModule,
    SharedMoudlue // --> includes the dropdown directive 
  ],
  /** All the services provided in this app **/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
