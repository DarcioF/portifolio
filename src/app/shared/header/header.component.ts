import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: InfoPageService) { }

  ngOnInit(): void {

    (($) => {
      'use strict';

      const nav = $('nav');
      const navHeight = nav.outerHeight();

      $('.navbar-toggler').on('click', () => {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
          $('#mainNav').addClass('navbar-reduce');
        }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll').on('click', () => {
        $('.navbar-collapse').collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
      });

      /*--/ Navbar Menu Reduce /--*/
      $(window).trigger('scroll');
      $(window).on('scroll', () => {
        const pixels = 50;
        const top = 1200;
        if ($(window).scrollTop() > pixels) {
          $('.navbar-expand-md').addClass('navbar-reduce');
          $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
          if (!$('#navbarDefault').hasClass('show')) {
            $('.navbar-expand-md').removeClass('navbar-reduce');
          }
          $('.navbar-expand-md').addClass('navbar-trans');
        }
        if ($(window).scrollTop() > top) {
          $('.scrolltop-mf').fadeIn(1000, 'easeInOutExpo');
        } else {
          $('.scrolltop-mf').fadeOut(1000, 'easeInOutExpo');
        }
      });

    })(jQuery);
  }

}
