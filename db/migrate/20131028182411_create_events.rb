class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :story_id
      t.string :event_type
      t.date :date
    end
  end
end
