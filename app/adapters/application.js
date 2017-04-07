import ENV from "t2-allocation/config/environment";
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({host: ENV.API_BASEURL});
