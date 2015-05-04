class SearchController < ApplicationController
  def search
    @cartoons = Cartoon.all
    @cartoon = Cartoon.new
    @results = Search.for(params["keyword"])
  end
end