import { Component } from '@angular/core';
import { ActivatedRoute, Router ,Route} from '@angular/router';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {

  __newsService:NewsOperationsService; 
  router:Router;
  activeRoute:ActivatedRoute;
  n:News = new News('','','','');
  
    constructor(newsService:NewsOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__newsService = newsService;
    this.router = router;
    this.activeRoute = activeRoute;


    let searchCategory = this.activeRoute.snapshot.params['category'];
    console.log(searchCategory);
    this.n= this.__newsService.getNewsByCategories(searchCategory);
    console.log(this.n);

}
}

