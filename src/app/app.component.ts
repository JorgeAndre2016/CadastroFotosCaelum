import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Caelum Pic';
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
}
