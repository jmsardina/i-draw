class AddImageUrlToCartoons < ActiveRecord::Migration
  def change
    add_column :cartoons, :image_url, :string
  end
end
