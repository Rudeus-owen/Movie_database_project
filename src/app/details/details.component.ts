import { Component ,OnInit} from '@angular/core';
import { Route,Router,RouterModule } from '@angular/router';
import { MovieService } from '../movie.service';
import { AddEventListenerOptions } from 'rxjs/internal/observable/fromEvent';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  isHovered: boolean = false;
  movieList: any;
  constructor(private movieSerice: MovieService) { }

  ngOnInit(): void {
    this.getMovieList()
    // Assuming your search box and search togglers are part of the home component's template
    const searchBox = document.querySelector("[search-box]") as HTMLElement;
    const searchTogglers = document.querySelectorAll("[search-toggler]");

    this. addEventOnElements(searchTogglers, "click", function () {
      searchBox.classList.toggle("active");
    });

    this.toggleSidebar();
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

  
  private getMovieList(){
    this.movieSerice.getmovielist().subscribe({
     next:(res) => {
       console.log(res);
       this.movieList =  res;
       console.log(this.movieList);
     }
    })
   }
}






