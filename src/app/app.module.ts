import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graphs/graph/graph.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CryptoTableComponent } from './home/crypto-table/crypto-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule,HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NavBarComponent,
    HomeComponent,
    CryptoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule ,
    NgxDatatableModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
