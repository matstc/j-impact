class Story < ActiveRecord::Base
  attr_accessible :date, :headline, :link, :slug, :outlets, :outlet_ids
  has_and_belongs_to_many :outlets
  has_many :events

  def to_s
    headline
  end
end
