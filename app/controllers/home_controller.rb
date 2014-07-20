class HomeController < ApplicationController

  def index
    @books = [
      'Pragmatic Programer',
      'God meets Physics',
      'One Day'
    ]
  end
end
