import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/items/button/button.component';

@Component({
  selector: 'app-shaper',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './shaper.component.html',
  styleUrl: './shaper.component.scss',
})
export class ShaperComponent {}
