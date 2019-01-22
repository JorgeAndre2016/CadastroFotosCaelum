import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html'
})

export class FotoComponent implements OnInit {

    @Input() titulo: string;
    @Input() url: string;

    constructor(public http: HttpClient) { }

    ngOnInit() { }
}
