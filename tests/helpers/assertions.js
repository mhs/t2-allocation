// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
let checkDate = (knownDate, testedDate, assertion) => equal(knownDate.format('YYYY-MM-DD'), testedDate.format('YYYY-MM-DD'), assertion);

export { checkDate };
