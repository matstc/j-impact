class Outlet < ActiveRecord::Base
  attr_accessible :name
  validates :name, presence: true

  def to_s
    name
  end
end
