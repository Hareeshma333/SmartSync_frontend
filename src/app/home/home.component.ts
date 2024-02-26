import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { AppRouteModule } from '../app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent,AppRouteModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
