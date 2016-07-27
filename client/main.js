import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Category } from '/imports/both/Category';
import { FlowRouter } from 'meteor/kadira:flow-router';

import '/imports/client/routes';
import './main.html';

Template.showCategories.onCreated(function () {
  this.category = new ReactiveVar();
  this.subscribe('categories');
});

Template.showCategories.helpers({
  categories() {
    return Category.find();
  },
  selectedCategory() {
    const name = Template.instance().category.get();
    return name ? Category.findOne({ name }).sub_categories : [];
  },
});

Template.showCategories.events({
  'change select'(event, template) {
    template.category.set(event.currentTarget.value);
  },
});

Template.subCategory.events({
  'click li'(event, template) {
    FlowRouter.go('information', {
      name: encodeURIComponent(event.currentTarget.innerText),
    });
  },
});

