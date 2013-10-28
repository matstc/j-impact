class Event < ActiveRecord::Base
  attr_accessible :event_type, :date, :story_id
  belongs_to :story

  validates :story, presence: true

  def to_s
    event_type
  end
end

