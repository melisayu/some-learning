import { $body } from "../global";

/**
 * Helper Functions
 */

const isMobile = () => {
  return 'ontouchstart' in document;
}

const hasAdminBar = () => {
  return $body.hasClass('admin-bar');
}

export {
  isMobile,
  hasAdminBar
}