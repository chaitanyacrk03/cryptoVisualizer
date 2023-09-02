import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graphs/graph/graph.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'charts/:id',component:GraphComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
