class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :headline
      t.string :link
      t.string :slug
      t.date :date

      t.timestamps
    end
  end
end
