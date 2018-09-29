import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    CommonModule, // Gives access to common directives --> Comon Module
    ReactiveFormsModule,
    ShoppingListRoutingModule,
    FormsModule
  ]
})
export class ShoppingListModule {}