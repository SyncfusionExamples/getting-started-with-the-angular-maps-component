import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapsModule, LegendService, DataLabelService, MapsTooltipService } from '@syncfusion/ej2-angular-maps';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapsModule
  ],
  providers: [LegendService, DataLabelService, MapsTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
