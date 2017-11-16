import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  title:string=`My Profile`;
  tagline:string=`I strive for two things in design: <span>simplicity and clarity.</span> Great design is born of those two things.`;
  description:string=`	<p>I am <strong>Ranjit Raut, Web Developer</strong> offering around<strong> 6 Years</strong> of competitive experience in Graphic Designing, Website Designing/ Developing and Web Applications.</p>
  <p class="width-49 fl">I like to design immersive and brilliant experiences that are also clear and easy to navigate, regardless of screen size. I quite love of strong colors and textures, but I try to use a wide range of visual styles to always match the quality of the project.</p>
  <p class="width-49 fr">I also do quite a bit of coding, from front-end coding (HTML5/CSS3/JavaScript/JS/Bootstrap) to responsive websites and web applications. I like to keep my code clean and tidy and make sure it's as future proof as possible and easy to build on.</p>
  `;
  designtitle:string =`Design Skills`;
  designdescription:string =`Adobe Photoshop CS6, Adobe Illustrator CS6 and CorelDraw X5.`;
  Programmingtitle:string =`Programming Skills `;
  Programmingdescription:string =`HTML5, HTML4, CSS3, CSS2, JavaScript, JQuery, Bootstrap, Angular JS and Adobe Flash Action Script 2.0.`;
  
  silicustitle:string=`Silicus Technologies India Private Limited`;
  silicusdesigination:string=`Front-End Developer IV`;
  silicusduartion:string=`January 2016 – Present`;
  silicusdescription:string=`<p>As <strong>Front-End Developer,</strong> My role is responsible for implementing visual elements that users see and interact with in a web application. Also I usually supported by back-end web developers. I am using a mix of technologies such as HTML, CSS, jQuery, Javascript and Angular JS.</p>
  <p>Research current industry trends of UI, and assist with development and promotion of coding best practices within team and industry.</p>`;

  nitortitle:string=`Nitor Infotech Pvt. Ltd.`;
  nitordesigination:string=`Senior UI Analyst`;
  nitorduartion:string=`February 2014 – Present`;
  nitordescription:string=`<p>As <strong>UI Analyst,</strong> My role is responsible for designing, coding and modifying web Applications, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation. worked closely with developers and solved UI issues.</p>
  <p>I am using best practices and standards for accessibility and cross-browser compatibility.</p>`;
  
  sunflowertitle:string=`Sunflower Information Technology Pvt. Ltd.`;
  sunflowerdesigination:string=`Web Designer`;
  sunflowerduartion:string=`February 2011 – January 2014`;
  sunflowerdescription:string=`<p>As Web designer, my responsibility was to designing and developing UI for websites and web applications. I worked together with development, QA and Marketing teams.</p>`;
  constructor() { }

  ngOnInit() { }

}
