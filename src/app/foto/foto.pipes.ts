import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTituloPipe implements PipeTransform {
    transform(fotos: Array<FotoComponent>, digitado: string): Array<FotoComponent> {
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}
