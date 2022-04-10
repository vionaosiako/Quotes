import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'home',component: HomeComponent },
  // {path:'aboutUs', component: AboutUsPageComponent },
  // {path:'generateQuote', component: GenerateQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
