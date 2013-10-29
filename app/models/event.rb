class Event < ActiveRecord::Base
  attr_accessible :event_type, :date, :story_id
  belongs_to :story

  validates :story, presence: true
  default_scope order('date ASC')

  def to_s
    event_type
  end
end

