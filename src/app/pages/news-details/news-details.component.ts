import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './news-details.component.html',
  styles:``
})
export class NewsDetailsComponent {

}
