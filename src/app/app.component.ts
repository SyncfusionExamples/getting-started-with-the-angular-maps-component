import { Component } from '@angular/core';
import * as worldMapData from './worldMap.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  public titleOptions: object = {
    text: 'Members of the UN Security Council'
  }

  public legendOptions: object = {
    visible: true
  }

  public layerOptions: object[] = [{
    dataLabelSettings: {
      visible: true,
      smartLabelMode: 'Trim'
    },
    tooltipSettings: {
      visible: true,
      valuePath: 'Country'
    },
    shapeData: worldMapData,
    shapePropertyPath: 'name',
    shapeDataPath: 'Country',
    shapeSettings: {
      colorValuePath: 'Membership',
      colorMapping: [
        { value: 'Permanent', color: '#EDB46F'},
        { value: 'Non-Permanent', color: '#F1931B'}
      ],
      fill: '#E5E5E5'
    },
    dataSource: [
      { Country: 'China', Membership: 'Permanent' },
      { Country: 'France', Membership: 'Permanent' },
      { Country: 'Russia', Membership: 'Permanent' },
      { Country: 'United Kingdom', Membership: 'Permanent' },
      { Country: 'United States', Membership: 'Permanent' },
      { Country: 'Bolivia', Membership: 'Non-Permanent' },
      { Country: 'Eq. Guinea', Membership: 'Non-Permanent' },
      { Country: 'Ethiopia', Membership: 'Non-Permanent' },
      { Country: 'Côte d Ivoire', Membership: 'Permanent' },
      { Country: 'Kazakhstan', Membership: 'Non-Permanent' },
      { Country: 'Kuwait', Membership: 'Non-Permanent' },
      { Country: 'Netherlands', Membership: 'Non-Permanent' },
      { Country: 'Peru', Membership: 'Non-Permanent' },
      { Country: 'Poland', Membership: 'Non-Permanent' },
      { Country: 'Sweden', Membership: 'Non-Permanent' },
    ]
  }]
}
