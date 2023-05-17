import { Component } from '@angular/core'
import { Singer } from 'src/core/models/Singer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'gomy'
  cantantes!: Singer[] 

  constructor() {
    
  }
}
