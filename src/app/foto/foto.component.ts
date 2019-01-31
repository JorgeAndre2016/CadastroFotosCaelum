import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent implements OnInit {

    @Input() public titulo = '';
    @Input() public url = '';
    public descricao = '';

    constructor() { }

    ngOnInit() { }
}
