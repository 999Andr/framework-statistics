import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent { 

  title = 'framework-statistics';
  x: number;
  view: any[] = [this.x, 200];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Framework';
  showYAxisLabel = true;
  yAxisLabel = 'Numbers';
  timeline = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#90EE90', '#87CEFA', '#FF7F50']
  };

  colorSchemeTwo = {
    domain: ['#3cb371', '#f0fff0', '#5AA454', '#9370DB']
  };
  
  showLabels = true;

  public single = [
 
    {
      "name": "Vue",
      "value": 157000
    },
    {
      "name": "React",
      "value": 144000
    },
    {
      "name": "Angular",
      "value": 57600
    }
  ];

  public singleTwo = [
 
    {
      "name": "Vue",
      "value": 11590
    },
    {
      "name": "React",
      "value": 70963
    },
    {
      "name": "Angular",
      "value": 72742
    }
  ];

  public multi = [
    {
      "name": "Vue",
      "series": [
        {
          "name": "2019",
          "value": 157000
        },
        {
          "name": "2018",
          "value": 122284
        }
      ]
    },

    {
      "name": "React",
      "series": [
        {
          "name": "2019",
          "value": 144000
        },
        {
          "name": "2018",
          "value": 117687
        }
      ]
    },

    {
      "name": "Angular",
      "series": [
        {
          "name": "2019",
          "value": 57600
        },
        {
          "name": "2018",
          "value": 43546
        }
      ]
    }
  ];

 ngOnInit() {  
    this.getView();
    window.onresize = () => {
    this.getView();
    }; 
  }
  
  getView() {   
    this.x = document.documentElement.clientWidth;
    
    if (this.x > 1300) {
      this.x =  500;
    };
    
    if ((this.x > 800) && (this.x < 1300)) {
      this.x =  0.5 * this.x;
    };
    
    if (this.x < 800) {
      this.x =  0.999 * this.x;
    };
    
    return this.view = [this.x, 300];
  }
  
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}