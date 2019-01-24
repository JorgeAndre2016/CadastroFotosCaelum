import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroFotoComponent } from './cadastro-foto/cadastro-foto.component';
const rotasApp: Routes = [
    { path: '', component: ListagemComponent},
    { path: 'cadastro', component: CadastroFotoComponent }
];
export const roteamento = RouterModule.forRoot(rotasApp);
