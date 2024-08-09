import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home-footer.component.html',
  styleUrl: './home-footer.component.scss'
})
export class HomeFooterComponent {

}
