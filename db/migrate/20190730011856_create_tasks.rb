class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :priority
      t.date :due
      t.string :status
      t.string :notes

      t.timestamps
    end
  end
end
