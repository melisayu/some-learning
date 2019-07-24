import $ from "jquery";
import "jquery.mmenu";
import "jquery.mmenu/dist/wrappers/wordpress/jquery.mmenu.wordpress";

const RightPanel = $("#right-panel");
RightPanel.mmenu(
  {
    offCanvas: {
      position: "right",
      zposition: "front"
    },
    extensions: ["pagedim-black", "border-full"]
  },
  {
    offCanvas: {
      pageSelector: ".outer-content-wrapper"
    }
  }
);

// Manually trigger the menu
$(".menu-trigger.open").on("click", () => {
  RightPanel.data("mmenu").open();
});

$(".menu-trigger.close").on("click", () => {
  RightPanel.data("mmenu").close();
});
