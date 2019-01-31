import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent implements OnInit {

    @Input() url: string;
    @Input() titulo: string;

    constructor() { }

    ngOnInit() {
        this.titulo = this.titulo.length > 10 ? `${this.titulo.substr(0, 10)}...` : this.titulo;
    }
}
