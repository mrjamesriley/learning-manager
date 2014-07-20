class Book < ActiveRecord::Base
  attr_accessible :author, :title, :status
end
