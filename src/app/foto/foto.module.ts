import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTituloPipe } from './foto.pipes';

@NgModule({
    imports: [],
    exports: [FotoComponent, FiltroPorTituloPipe ],
    declarations: [FotoComponent, FiltroPorTituloPipe ],
    providers: [],
})
export class FotoModule { }
