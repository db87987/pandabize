class CreateOptionValues < ActiveRecord::Migration[5.1]
  def change
    create_table :option_values do |t|
      t.integer :position, null: false, default: 0
      t.string :name, null: false
      t.integer :option_type_id, null: false

      t.timestamps
    end
  end
end
