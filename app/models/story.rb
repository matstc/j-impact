class Story < ActiveRecord::Base
  has_and_belongs_to_many :outlets
  has_many :events
  validates :headline, presence: true

  def events_with_dates
    events.reject{|e| e.date.blank?}
  end

  def date_for_display
    return "" if date.blank?

    date.strftime("%B %d, %Y")
  end

  def link_for_display
    return "-" if link.blank?
    link.gsub(/^http:\/\//, "").gsub(/\?.*/,"")
  end

  def link
    the_link = read_attribute(:link)
    return the_link if the_link.to_s.start_with?("http://")

    return "http://#{the_link}"
  end

  def to_s
    headline
  end
end
