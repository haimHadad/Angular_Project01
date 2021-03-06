import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponenet } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownHeaderDirective } from './dropdown-header.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        LoadingSpinnerComponent,
        AlertComponenet,
        PlaceholderDirective,
        DropdownHeaderDirective
    ],
    imports:[CommonModule],
    exports:[
        LoadingSpinnerComponent,
        AlertComponenet,
        PlaceholderDirective,
        DropdownHeaderDirective,
        CommonModule
    ],
    entryComponents:[AlertComponenet]
})
export class SharedModule{

}