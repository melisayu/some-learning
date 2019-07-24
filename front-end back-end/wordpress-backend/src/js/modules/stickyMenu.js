import $ from "jquery";
import imagesLoaded from "imagesloaded";
import requestAnimationFrame from "requestAnimationFrame";
import debounce from "lodash.debounce";

import { isMobile } from "../services/helper";
import { $body, $window } from "../global";

imagesLoaded.makeJQueryPlugin($);

/**
 * Sticky Menu Class
 */
class StickyMenu {
  constructor() {
    /*if ( isMobile() ) {
      return;
    }*/

    if ($(".sticky-bar").length) {
      this.el = {};
      this.vars = {};
      this.setupElements();
      this.eventBinding();
      this.setSticky();
    }
  }

  setupElements() {
    this.el.$sticky = $(".sticky-bar");

    if (!this.el.$sticky.length) {
      return;
    }

    this.el.$stickyInner = $(".sticky-bar__inner");

    this.vars.stickyClass = "js-sticky-bar";
    this.vars.stickyBarOpenTransitionClass = "js-sticky-bar--open";
    this.vars.previousScrollPosition = 0;
    this.vars.stickyBarOffsetTop = this.el.$sticky.offset().top;
    this.vars.stickyBarOffsetBottom = this.el.$sticky.height() + this.vars.stickyBarOffsetTop;
  }

  eventBinding() {
    // Prevent content from jumping when we show/hide the header
    this.el.$sticky.imagesLoaded().always(() => this.setBarHeight());
    $window.on("load resize", debounce(() => this.setBarHeight(), 200));
  }

  setBarHeight() {
    this.el.$sticky.css("height", this.el.$stickyInner.height());
  }

  setSticky() {
    const currentScrollTop = $window.scrollTop();
    let scrollTimeout;

    // Scroll down && we're below the header
    if (
      currentScrollTop > this.vars.previousScrollPosition &&
      currentScrollTop > this.vars.stickyBarOffsetBottom
    ) {
      if (!$body.hasClass(this.vars.stickyClass)) {
        $body.addClass(this.vars.stickyClass);

        scrollTimeout = setTimeout(() => {
          $body.addClass(this.vars.stickyBarOpenTransitionClass);
        }, 50);

        this.vars.previousScrollPosition = currentScrollTop;
        // this.setBarHeight();
      }
    }

    // Scroll Up
    if (currentScrollTop < this.vars.previousScrollPosition) {
      clearTimeout(scrollTimeout);

      // show the regular header
      if (currentScrollTop <= this.vars.stickyBarOffsetTop) {
        if ($body.hasClass(this.vars.stickyClass)) {
          $body
            .removeClass(this.vars.stickyClass)
            .removeClass(this.vars.stickyBarOpenTransitionClass);

          this.vars.previousScrollPosition = currentScrollTop;
          this.setBarHeight();
        }
      }
    }

    requestAnimationFrame(() => {
      this.setSticky();
    });
  }
}

new StickyMenu();
