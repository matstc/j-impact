class Event < ActiveRecord::Base
  attr_accessible :event_type, :date, :story_id, :description
  belongs_to :story

  validates :story, presence: true
  validates :event_type, presence: true
  default_scope order('date ASC')

  def to_s
    event_type
  end
end

