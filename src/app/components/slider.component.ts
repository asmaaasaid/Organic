import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
imageLIst:any[]=[
  {
    slideSrc:"../../assets/organic-img/edible-oil.jpg",
  },
  {
    slideSrc:"../../assets/organic-img/orage-juice-kariz.jpg",
  },
  {
    slideSrc:"../../assets/organic-img/red-chillies.jpg",
  },
  {
    slideSrc:"../../assets/organic-img/sanitizer.jpg",
  },
]
imageLIstTwo:any[]=[
  {
    slideSrc:"../../assets/organic-img/orage-juice-kariz.jpg",
  },
  {
    slideSrc:"../../assets/organic-img/edible-oil.jpg",
  },
  {
    slideSrc:"../../assets/organic-img/sydney-rae-668606-unsplash.jpg",
  },
  {
    slideSrc:"../../assets/organic-img/red-chillies.jpg",
  },
]
}
