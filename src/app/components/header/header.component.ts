import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public clickBurger(){

    //dar clic en la burger se abre el sub menu
  
                $(".nav-icon").click(function() {
                    $(".full-nav").addClass("open");
                });
              
                //dar clic en la burger se cierra sub menu
                $(".nav-close").click(function() {
                    $(".full-nav").removeClass("open");
                });
              
                // la barra de navegacion se mantiene al hacer scroll
                $(window).scroll(function() {
                    var sc = $(window).scrollTop();
                    if (sc > 100) {
                        $(".nav").addClass("sticky");
                    } else {
                        $(".nav").removeClass("sticky");
                    }
              
                });
// la barra de navegacion se mantiene al hacer scroll
                $(window).scroll(function() {
                  var sc = $(window).scrollTop();
                  if (sc > 100) {
                      $(".nav").addClass("sticky");
                  } else {
                      $(".nav").removeClass("sticky");
                  }
          
              });
                
    
    
          }






}
