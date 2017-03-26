// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import { WIDTH_OF_DAY, WIDTH_OF_DESCRIPTOR } from "t2-allocation/utils/constants";
let clickedDate = function(xPosition) {
  let dayOffset = Math.floor((xPosition - WIDTH_OF_DESCRIPTOR) / WIDTH_OF_DAY);
  let currentMonday = moment(UIGlobal.projectsUI.get("date"));
  return moment(currentMonday).add("days", dayOffset).format("YYYY-MM-DD");
};

export default clickedDate;
