import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Angel Uriel Lopez Vazquez',
    email: 'angelitolv1824@gmail.com',
    telefono: '241 358 7157',
    direccion: 'Av. Ferrocarril, 38, Velazco, Xaloztoc, Tlax.',
    nacimiento: '14/04/2006'
  };
}