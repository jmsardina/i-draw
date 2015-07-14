class DrawingsController < ApplicationController

  def index
    @cartoon = Cartoon.new
    @cartoons = Cartoon.all.shuffle

    if @results
      respond_to do |format|
        format.html
        format.js { }
      end
    end
    render 'layouts/main'
  end
end