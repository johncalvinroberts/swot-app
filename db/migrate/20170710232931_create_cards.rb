class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :category
      t.string :description
      t.integer :position
      t.references :board, foreign_key: true

      t.timestamps
    end
  end
end
