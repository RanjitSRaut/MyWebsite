import { Component,HostListener,OnInit } from '@angular/core';
import * as $ from 'jquery';
//import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit{
  title = 'app';  
  showNav = false;//  In Component Class, I would say, set everything as public noneed to add like public showNav = false;
  isMenuExpanded: boolean = false;

  //Responsive Menu JS
  toggleMenu() {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  hideMenu() {
    this.isMenuExpanded =false;
  }
  
  
  ngOnInit():void {
    this.contactheight()
  }
  contactheight():void{
    var contactheight = $(window).height();
    $(".contact-wrapper").css("minHeight", contactheight + "px");
    }

    constructor() { 

    }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;        
    if(offset >= document.getElementById('home').offsetHeight){
      this.showNav =true;
    }
    else {
      this.showNav =false;
    }
    //Start jquery 
    var headerHeight = $("#nav").height();  
    var scrollPos = $(document).scrollTop();
		$('.nav-wrapper .container .nav ul li a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href")) ;
			if (refElement.position().top - headerHeight <= scrollPos && refElement.position().top + refElement.height() > scrollPos)  {
			  $('.nav-wrapper .container .nav ul li a').removeClass("active");
         currLink.addClass("active");
         $("#copyright").css("visibility", "visible");
			}
			else{
        currLink.removeClass("active");
        $("#copyright").css("visibility", "hidden")
			}
		});


  }

}
