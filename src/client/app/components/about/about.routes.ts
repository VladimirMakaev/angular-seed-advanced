import { AboutComponent } from './about.component';
import { Routes } from '@angular/router';


export const AboutRoutes: Routes = [
  {
    path: 'about',
    loadChildren: 'app/components/about/about.module#AboutModule'
  }
];
