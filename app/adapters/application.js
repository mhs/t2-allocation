import DS from "ember-data";
import ENV from "t2-allocation/config/environment";

let ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: ENV.API_BASEURL});

export default ApplicationAdapter;
