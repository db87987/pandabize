class CreateOptionValueVariants < ActiveRecord::Migration[5.1]
  def change
    create_table :option_value_variants do |t|
      t.integer :variant_id, null: false
      t.integer :option_value_id, null: false

      t.timestamps
    end
  end
end
