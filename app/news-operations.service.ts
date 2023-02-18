import { Injectable } from '@angular/core';
import { News } from './news';


@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {

  constructor() { 
    let news1:News = new News('inflation in india','Rural demand recovery may drive next bout of inflation in india','BusinessNews','business.jpg')
    let news2:News = new News('Uddhav to teach lesson','Uddhav gets aggressive,asks cadres to teach lesson to thieves','Politics','politics.jpg')
    let news3:News = new News('Crime Branch Cracking','Crime Branch gets cracking on e-cigarettes in Mumbai','Crime','Crime.jpg')
    let news4:News = new News('India accuses BBC','India accuses BBC of tax evasion amid Modi documentary row','World','world.jpg')
    let news5:News = new News('India allows online payment aggregators',' Google,Amazon as online payment aggregators','Technology','technology.jpg')
    let news6:News = new News('Controversal dismissal','Unlucky Virat Kohli falls to a controversal dismissal','Sports','sports.jpg')


    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)

  } 
  newsArr:News[]=[];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {
   
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
      if(n.category==filterCategory){
        outputArr.push(n);
      }
    });

    return outputArr;
  }

     getNewsByCategories(searchCategory:string):News{
      let outputNews:News = new News('','','','');
      for(let i=0;i<this.newsArr.length;i++){
        let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory){
          outputNews = thisNews;
          break;

        }
      }
      return outputNews;
     }
  
  }