import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-home-searcher',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './home-searcher.component.html',
  styleUrl: './home-searcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSearcherComponent {
  value: string = "";
}
