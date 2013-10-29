class Story < ActiveRecord::Base
  attr_accessible :date, :headline, :link, :slug, :outlets, :outlet_ids
  has_and_belongs_to_many :outlets
  has_many :events
  validates :headline, presence: true

  def events_with_dates
    events.reject{|e| e.date.blank?}
  end

  def to_s
    headline
  end
end
