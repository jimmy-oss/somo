import { Component } from '@angular/core';
import * as AOS from 'aos';

 
 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'somo_frontend';
  remove: any;

  ngOnInit(): void{
    window.addEventListener('load', () =>{
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
    let preloader = window.document.getElementById('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
     preloader = this.remove()
    
      });
      
      
    }
  }
}

