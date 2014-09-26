`import { WIDTH_OF_DAY, WIDTH_OF_DESCRIPTOR } from "t2-allocation/utils/constants";`
clickedDate = (xPosition) ->
  dayOffset = Math.floor((xPosition - WIDTH_OF_DESCRIPTOR) / WIDTH_OF_DAY)
  currentMonday = moment(UIGlobal.projectsUI.get("date"))
  moment(currentMonday).add("days", dayOffset).format("YYYY-MM-DD")

`export default clickedDate;`
