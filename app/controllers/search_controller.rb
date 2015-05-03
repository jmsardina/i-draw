class SearchController < ApplicationController
  def create
    @cartoons = Cartoon.all
    @cartoon = Cartoon.new
    @results = Search.for(params["keyword"])
    if @results.empty?
      flash[:notice] = "Sorry! We don't have that one."
      redirect_to root_path
    else
      render 'drawings/index'
    end
  end
end