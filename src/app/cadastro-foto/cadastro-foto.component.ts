import { Component } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    selector: 'app-cadastro-foto',
    templateUrl: './cadastro-foto.component.html'
})

export class CadastroFotoComponent {

    public title = 'Cadastro de Fotos';
    public foto = new FotoComponent();

    public salvar() {
        console.log(this.foto);
    }
}
