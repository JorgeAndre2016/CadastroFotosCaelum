import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';

@Component({
    selector: 'app-cadastro-foto',
    templateUrl: './cadastro-foto.component.html'
})

export class CadastroFotoComponent implements OnInit {

    public title = 'Cadastro de Fotos';
    public foto = new FotoComponent();

    constructor() {}

    public ngOnInit() { }
}
