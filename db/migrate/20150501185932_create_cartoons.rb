class CreateCartoons < ActiveRecord::Migration
  def change
    create_table :cartoons do |t|
      t.string :name
    end
  end
end
