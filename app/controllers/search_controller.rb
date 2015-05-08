class SearchController < ApplicationController
  def create
    @results = Search.for(params["keyword"])
  end
end