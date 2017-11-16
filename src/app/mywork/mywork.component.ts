import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent implements OnInit {
  title:string = `My Work`;
  tagline:string = `Quality is much better than <span>quantity.</span>`;
  description:string =`<p>I’ve designed all sorts of projects for all sorts of clients, and the only thing that all my final products had in common is that they had to sell, market and promote. Every single detail matters - structure, typography, images, proportions, colors, patterns, lines, edges... All should be synchronized to complete the maximum UX. </p>
  <p><strong>“Think Multi-Device”</strong> is my professional motto, and I always aim to create responsive web design, optimized for most devices and operation systems. As technology continues to develop and change, I am excited to see what new products and design needs emerge.</p>
`;
  constructor() { }

  ngOnInit() { }

}
