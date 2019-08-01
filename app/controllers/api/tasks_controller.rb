class Api::TasksController < ApplicationController

  def index
    render json: Task.all
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task
    else
      render json: { errors: @task.errors }, status: :unprocessable_entity
    end
  end

  def update
    @task = Task.find(params[:id])
    # update with item params if you want to update the object
    @task.update(complete: !@task.complete)
    render json: @task
  end

  def destroy
    Task.find(params[:id]).destroy
    render json: { message: 'Task has been deleted'}
  end

  private

    def task_params
      params.require(:task).permit(:name, :complete)
    end

end
