import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  tabs = [
    { name: 'inicio'},
    { name: 'buscar'},
    { name: 'agregar'}, 
    { name: 'tiendas'},
    { name: 'perfil'},
  ]
  
  tabIndex = output<number>()

  tabSelect(tabIndexSelected: number){
    this.tabIndex.emit(tabIndexSelected);
  }
}
