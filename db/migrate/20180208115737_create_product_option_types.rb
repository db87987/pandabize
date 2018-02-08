class CreateProductOptionTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :product_option_types do |t|
      t.integer :position, null: false, default: 0
      t.integer :product_id, null: false
      t.integer :option_type_id, null: false

      t.timestamps
    end
  end
end
