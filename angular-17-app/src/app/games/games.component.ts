import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Juegos Favoritos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})

export class GameComponent{
  @Input() username ='';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {

      id:1,
      name: 'Hi-Fi Rush'
    },
    {
      id:2,
      name: 'Space Invaders'
    },
    {
      id:3,
      name: 'Hollow Knight'
    }
  ]
}