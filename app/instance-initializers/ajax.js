// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import projectsUI from "t2-allocation/utils/date-ui";

let initializer = {
  name: 'ajaxInitializer',

  initialize(instance) {
    $.ajaxSetup({beforeSend(xhr) {
      let auth = instance.container.lookup("controller:authentication");
      xhr.setRequestHeader("Authorization", auth.get('accessToken'));
      xhr.setRequestHeader("x-Requested-With", "XMLHTTPRequest");
      let startDate = UIGlobal.projectsUI.get('startDate');
      if (startDate) {
        xhr.setRequestHeader("X-Window-Start", startDate.format('YYYY-MM-DD'));
        return xhr.setRequestHeader("X-Window-End", UIGlobal.projectsUI.get('endDate').format('YYYY-MM-DD'));
      }
    }
    });

    return $(document).ajaxError( function(event, jqXHR, ajaxSettings, thrownError) {
      if (!jqXHR.getAllResponseHeaders()) { return; }
      if (jqXHR.status === 422) { return; }
      // HAX HAX HAX
      localStorage.removeItem('accessToken');
      return;
      let auth = instance.container.lookup("controller:authentication");
      return auth.logout();
    });
  }
};

export default initializer;
