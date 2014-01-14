require 'test_helper'

class AddEventToNewStoryTest < ActionDispatch::IntegrationTest
  setup do
    Capybara.current_driver = Capybara.javascript_driver 
  end

  test 'adds new story' do
    visit "/"
    click_on "Stories"
    click_on "Add new story"
    fill_in 'Headline', with: "capybara test"
    click_button "Create Story"

    page.has_content? "Story was successfully created."
    page.has_content? "capybara test"
  end

end
