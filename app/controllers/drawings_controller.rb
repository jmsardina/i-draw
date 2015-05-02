class DrawingsController < ApplicationController

  def index
    @cartoon = Cartoon.new
    @cartoons = Cartoon.all
  end
end