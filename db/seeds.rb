# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
outlets = Outlet.create([{name: 'New York Times'},{name: 'Washington Post'}, {name: 'The Tyee'}])
stories = Story.create([{headline: 'Dying fish'},{headline: 'Corruption strikes back'},{headline: 'Unwarranted promotion'}])
events = Event.create([{event_type: 'Local pickup', story_id: stories[0].id},{event_type: 'blog post', story_id: stories[0].id}])
