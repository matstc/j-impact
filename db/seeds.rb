# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
outlets = Outlet.create([{name: 'New York Times'},{name: 'Washington Post'}, {name: 'The Tyee'}])

stories = Story.create([{headline: 'Dying fish', link: "http://example.com/dying-fish", outlet_ids: [outlets[0].id]},{headline: 'Corruption strikes back', link: "http://example.com/corruption-strikes-back", outlet_ids: [outlets[1].id]},{headline: 'Unwarranted promotion'}])

events = Event.create([{event_type: 'Local pickup', description: 'Story was carried by the local bugle.', date: 8.days.ago, story_id: stories[0].id},{event_type: 'blog post', description: 'A prominent blogger responded to the story.', date: 3.days.ago, story_id: stories[0].id}])
