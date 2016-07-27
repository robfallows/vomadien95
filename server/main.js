import { Meteor } from 'meteor/meteor';
import { Category } from '/imports/both/Category';

Meteor.startup(() => {
  if (Category.find().count() === 0) {
    [
      {
        name: 'IT',
        sub_categories: [
          { name: 'Java' },
          { name: 'PHP' },
          { name: '.NET' },
          { name: 'Android/iOS' },
          { name: 'HTML/CSS' },
          { name: 'Javascript and Framworks' },
          { name: 'Ruby on Rails' },
        ],
      },
      {
        name: 'ENGLISH',
        sub_categories: [
          { name: 'Listening' },
          { name: 'Speaking' },
          { name: 'Writing' },
          { name: 'Reading' },
          { name: 'Topic' },
        ],
      },
      {
        name: 'SoftSkill',
        sub_categories: [
          { name: 'CV and CL' },
          { name: 'Presentation' },
          { name: 'Teamwork' },
        ],
      },
      {
        name: 'ENTERTAINMENT',
        sub_categories: [
          { name: 'Sports' },
          { name: 'Games' },
          { name: 'Music & Videos' },
          { name: 'Fashion' },
          { name: 'Talk show' },
        ],
      },
    ].forEach(doc => {
      Category.insert(doc);
    });
  }
});

Meteor.publish('categories', function() {
  return Category.find();
});
