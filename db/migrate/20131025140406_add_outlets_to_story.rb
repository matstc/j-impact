class AddOutletsToStory < ActiveRecord::Migration
  def change
    create_table :outlets_stories, id: false do |t|
      t.integer :story_id
      t.integer :outlet_id
    end
  end
end
