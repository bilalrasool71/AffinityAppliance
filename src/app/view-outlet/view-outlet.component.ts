import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilitiesModule } from '../core/utilities/utilities/utilities.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-view-outlet',
  imports: [RouterOutlet, UtilitiesModule],
  templateUrl: './view-outlet.component.html',
  styleUrl: './view-outlet.component.scss'
})
export class ViewOutletComponent {
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      badge: '3',
      items: [
        {
          label: 'Core',
          icon: 'pi pi-bolt',
          shortcut: '⌘+S',
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
          shortcut: '⌘+B',
        },
        {
          separator: true,
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
          shortcut: '⌘+U',
        },
      ],
    },
  ]
}
