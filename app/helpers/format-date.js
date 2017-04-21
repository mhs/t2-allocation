import Ember from 'ember';

export function formatDate(params/*, hash*/) {
  let fmt = params[1] || 'MMM DD';
  return moment(parms[0]).format(fmt);
}

export default Ember.Helper.helper(formatDate);
