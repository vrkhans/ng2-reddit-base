import { Component } from '@angular/core';

@Component({
   
    selector: 'reddit-article',
    host:{
        class: 'row'
    },

    template: `
                <div class="four wide column center aligned votes">
                    <div class="ui statistic">
                
                        <div class="value">
                         {{ votes }}
                        </div>
                
                        <div class="label">
                         Points
                        </div>

                    </div>
                </div>
                
                 <div class="twelve wide column">
                 <a class="ui large header" href="{{ link }}"> {{ title }} </a>
                 
                 <ul class="ui big horizontal list voters">
                     <li class="item"> 
                         <a href (click)="voteUp()">
                             <i class="arrow up icon"></i>
                             upvote
                         </a>
                     </li>
                 
                     <li class="item">
                         <a href (click)="voteDown()">
                             <i class="arrow down icon"></i>
                             downvote
                         </a>
                     </li>
                 </ul>
                 </div>        
    `
   
   
})

export class ArticleComponent {

    votes: number;
    title: string;
    link: string;

    constructor(){
        this.title = 'Angular2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }

    voteUp(){
        this.votes +=1;
    }

    voteDown(){
         this.votes -=1;
    }
}
