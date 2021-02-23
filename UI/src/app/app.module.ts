import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PlotlyModule } from 'angular-plotly.js';
import * as Plotly from 'plotly.js/dist/plotly.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavModule } from './nav/nav.module';
import { QueryComponent } from './query/query.component';
import { ApiModule } from './api/api.module';
import { GraphComponent } from './graph/graph.component';
import { DBComponent } from './db/db.component';
import { AttributeComponent } from './attribute/attribute.component';
import { WeightComponent } from './weight/weight.component';
import { DistanceFuncComponent } from './distance-func/distance-func.component';
import { ClusterMethodComponent } from './cluster-method/cluster-method.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';

PlotlyModule.plotlyjs = Plotly;


@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    GraphComponent,
    DBComponent,
    AttributeComponent,
    WeightComponent,
    DistanceFuncComponent,
    ClusterMethodComponent,
    HelpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    ApiModule,
    MaterialModule,
    PlotlyModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
