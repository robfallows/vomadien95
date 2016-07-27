import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('home', {
      main: 'showCategories',
    });
  },
});

FlowRouter.route('/information/:name', {
  name: 'information',
  action() {
    BlazeLayout.render('home', {
      main: 'information',
    });
  },
});
