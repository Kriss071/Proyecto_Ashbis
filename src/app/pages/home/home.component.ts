import { Component } from '@angular/core';
import { TabsComponent } from '../../utils/tabs/tabs.component';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from '../profile/user-profile/user-profile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TabsComponent,
    CommonModule,
    UserProfileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedTab: number = 0;

  tabSelect(tabIndex: number){
    this.selectedTab = tabIndex;
  }

}

