class AddStatusAndReviewToBooks < ActiveRecord::Migration
  def change
    add_column :books, :status, :integer, default: 1
    add_column :books, :position, :integer
    add_column :books, :review, :text
  end
end
