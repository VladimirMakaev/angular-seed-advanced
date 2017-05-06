import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '', component: AboutComponent }
];

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    providers: [],
    bootstrap: []
})
export class AboutModule {

}
