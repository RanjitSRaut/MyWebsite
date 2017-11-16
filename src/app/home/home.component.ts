import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
   
   // Card Flip Code Start // 
  (function () {
    create("so1", "flipping-right",7500);
    create("so2", "flipping-right",12500);
    create("so3", "flipping-right",14500);
    create("so4", "flipping-right",8500);
    create("so5", "flipping-right",10500);
    // Mobile Device 
    create("so1-mob", "flipping-right",7500);
    create("so2-mob", "flipping-right",12500);
    create("so3-mob", "flipping-right",14500);
    create("so4-mob", "flipping-right",8500);
    create("so5-mob", "flipping-right",10500);
   }());
   
  function create(divname, transition, interval)
   {
    window.setInterval(function () {
        myFunction(divname, transition);
          var i; 
           i++;
       }, interval); 
    
   }
   
   function myFunction(id, effect ) { 
      var element = document.getElementById(id);
      element.classList.toggle(effect);
   }

  // Card Flip Code End //

   }
  ngOnInit() { }

}
