import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  // Property Binding
  title:string = `About Me`;
  tagline:string = `I’m enough of designer to draw freely upon <span>my imagination.</span>`;
  descrption:string =`<p>I’m <strong>Ranjit Raut,</strong> a UI Developer based in Pune.</p>
  <p>As a designer and developer, I understand the perfect user interface should look good and work even better. Alongside my clients, I discover problems and solve them. In short, I create better online experiences.
  Every day, I Focus My attention and efforts on front end development and its coding tools: HTML5, CSS3, JavaScript, Jquery and Bootstrap. I work every day to keep up to date and helping people live a great browsing experience.</p>
  <p>My work involves converts PSD into hand-coded Semantic HTML5, CSS3 and adding Javascript/jQuery magic. Having ample range of knowledge and experience, I am very much capable of handing large projects and sharing my knowledge with team.</p>
  `;
  constructor() { }

  ngOnInit() {
  }

}
