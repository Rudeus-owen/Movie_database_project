
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { AddEventListenerOptions } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  movieList: any;
  popularList: any;
  items!: NodeListOf<Element>;
  thumbnails!: NodeListOf<Element>;
  countItem!: number;
  itemActive!: number;

  ngOnInit(): void {
    this.getMovieList();

    this.items = document.querySelectorAll('.banner-slider .slider-item');
    this.thumbnails = document.querySelectorAll('.poster-box');
    this.countItem = this.items.length;
    this.itemActive = 0;
    this.thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        this.itemActive = index;
        this.showSlider();
      });
    });
    const searchBox = document.querySelector("[search-box]") as HTMLElement;
    const searchTogglers = document.querySelectorAll("[search-toggler]");

    this. addEventOnElements(searchTogglers, "click", function () {
      searchBox.classList.toggle("active");
    });

    this.toggleSidebar();

    
  }

 private showSlider() {
    const itemActiveOld = document.querySelector('.banner-slider .slider-item.active');
    const thumbnailActiveOld = document.querySelector('.poster-box .slider-item.active');
  
    // Remove 'active' class from the old active elements, if found
    this.items.forEach(item => item.classList.remove('active'));
    this.thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
  
    // Add 'active' class to the current active elements, if they exist
    if (this.items[this.itemActive]) {
      this.items[this.itemActive].classList.add('active');
    }
  
    if (this.thumbnails[this.itemActive]) {
      this.thumbnails[this.itemActive].classList.add('active');
    }

  }

  private toggleSidebar() {
    const sidebarBtn = document.querySelector("[menu-btn]");
    const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
    const sidebarClose = document.querySelectorAll("[menu-close]");
    const overlay = document.querySelector("[overlay]");
    const sidebar = document.querySelector("[sidebar]");

    this.addEventOnElements(sidebarTogglers, "click", () => {
      sidebar?.classList.toggle("active");
      sidebarBtn?.classList.toggle("active");
      overlay?.classList.toggle("active");
    });

    this.addEventOnElements(sidebarClose, "click", () => {
      sidebar?.classList.remove("active");
      sidebarBtn?.classList.remove("active");
      overlay?.classList.remove("active");
    });
  }

    private addEventOnElements = function (elements: NodeListOf<Element>, eventType: string, callback: EventListenerOrEventListenerObject): void {
    Array.from(elements).forEach(elem => elem.addEventListener(eventType, callback));
  }
  
 


  private getMovieList() {
    this.movieService.getmovielist().subscribe({
      next: (res) => {
        console.log(res);
        this.movieList = res;
        console.log(this.movieList);
      }
    });
  }
}



