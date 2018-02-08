class CreateVariants < ActiveRecord::Migration[5.1]
  def change
    create_table :variants do |t|
      t.string :sku, null: false
      t.integer :product_id, null: false
      t.decimal :price, null: false
      t.integer :position, null: false, default: 0

      t.timestamps
    end
  end
end
