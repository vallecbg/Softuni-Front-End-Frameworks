import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  private symbols: number = 300;
  @Input() article: Article;
  @Input() articleDesc: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  readMore() : void {
    this.articleDescLen += this.symbols;
    if(this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage() : void {
    this.imageIsShown = true;
    this.imageButtonTitle = this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image";
  }

  hideDesc() : void {
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

}
