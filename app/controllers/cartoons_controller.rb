class CartoonsController < ApplicationController
  def create
    @cartoon = Cartoon.new(cartoon_params)
    if @cartoon.save
      respond_to do |format|
        format.html { redirect_to root_path, notice: "Cartoon was saved."}
        format.js { }
      end
    end
  end

  private
  def cartoon_params
    params.require(:cartoon).permit(:name, :avatar)
  end
end