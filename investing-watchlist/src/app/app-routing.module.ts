import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  {path: '', component: WatchListComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
