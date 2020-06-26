import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public ImagenHeroes:string = `./../../../assets/IMG/Superhéroes-Marvel.jpg`;

  constructor() { }

  ngOnInit(): void {
  }

}
