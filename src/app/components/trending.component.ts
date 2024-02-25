import { Component } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent {
trendingList:any[]=[
  {
    image:"../../assets/organic-img/coffee-asorted.jpg",
    trendItem:"Groceries",
    trendTitle:"assorted coffee",
    trendPrice:"199.2 $"
  },
  {
    image:"../../assets/organic-img/red-chillies.jpg",
    trendItem:"Groceries",
    trendTitle:"handpicked red chillies",
    trendPrice:"0.250 $"
  },
  {
    image:"../../assets/organic-img/orage-juice-kariz-600x600.jpg",
    trendItem:"juice",
    trendTitle:"fresh orange juice",
    trendPrice:"1000 $"
  },
  {
    image:"../../assets/organic-img/sanitizer.jpg",
    trendItem:"Groceries",
    trendTitle:"hand sanitizer",
    trendPrice:"150 $"
  }
]

// array of icons 
iconsArray: string[] = ['fa-solid fa-star', 'fa-regular fa-star'];

}
