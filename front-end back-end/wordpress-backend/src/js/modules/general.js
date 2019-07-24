import $ from "jquery";
import autosize from "autosize";
import debounce from "lodash.debounce";

import { $body, $window } from "../global";
import { hasAdminBar } from "../services/helper";

if (!Modernizr.svgasimg) {
  $(".svg-as-img[src$='.svg']").each((index, item) => {
    const $svg = $(item);
    $svg.attr("src", $svg.attr("src").replace(".svg", ".png"));
  });
}

/**
 * Wrap Select dropdown with a Div
 */
$('.form-row select').wrap('<div class="select-field" />');

/**
 * Textarea auto size
 */
autosize($(".contact-form textarea"));

/**
 * Contact Form Selectbox
 */
$('select[name="what-you-need"], select[name="event-type"]').on('change', function () {
  const value = $(this).val();

  if (value.length == 0) {
    $(this).removeClass('selected');
  } else {
    $(this).addClass('selected');
  }
});

/**
 * Set ATF Section height
 */
const $atfSection = $('.hero-section');
function setATFHeight() {
  $atfSection.removeAttr('style');

  // if ($window.width() >= 900) {
    const windowHeight = $window.height();
    const adminbarHeight = hasAdminBar() ? 32 : 0;
    let extraHeight = 0;
    // extraHeight = 80;
    let heroHeight = windowHeight - adminbarHeight + extraHeight;

    $atfSection.height(heroHeight);
  // }
}

if ($atfSection.length > 0) {
  setATFHeight();
  $window.on('resize', debounce(setATFHeight, 200));
}

/**
 * Hero Slide
 */
$(".hero-slides").owlCarousel({
  items: 1,
  loop: true,
  mouseDrag: false,
  // animateOut: 'fadeOut',
  animateIn: "hero-slide-in",
  animateOut: "hero-slide-out",
  dotsContainer: '.hero-section__nav',
});
