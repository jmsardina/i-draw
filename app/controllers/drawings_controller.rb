class DrawingsController < ApplicationController

  def index
    @cartoon = Cartoon.new
    @cartoons = Cartoon.all

    if @results
      respond_to do |format|
        format.html
        format.js { }
      end
    end
  end
end