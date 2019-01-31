import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent implements OnInit {

    title = 'Álbum de Fotos';
    fotos = new Array<any>();

    constructor(public http: HttpClient) {
        this.http.get('http://localhost:3000/v1/fotos')
            .pipe(map(resposta => resposta))
            .subscribe((respo: Array<any>) => {
                respo.forEach((resp) => {
                    this.fotos.push(resp);
                });
            }, (error) => {
                console.log(error);
            });
    }

    public ngOnInit() { }

}
