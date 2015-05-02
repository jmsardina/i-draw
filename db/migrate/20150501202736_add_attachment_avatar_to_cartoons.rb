class AddAttachmentAvatarToCartoons < ActiveRecord::Migration
  def self.up
    change_table :cartoons do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :cartoons, :avatar
  end
end
