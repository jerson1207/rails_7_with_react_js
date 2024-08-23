class Api::V1::QuestionsController < ApplicationController
  protect_from_forgery with: :null_session, if: -> { request.format.json? }

  
  def index
    @questions = Question.all
    render json: @questions, status: :ok
  end

  def update_counter
    @question = Question.find(params[:id])
    if params[:count_for] == 'Like'
      @question.update(likes_count:  @question.likes_count + 1)
    elsif params[:count_for] == 'Dislike'
      @question.update(dislikes_count:  @question.dislikes_count + 1)
    end

    render json: @questions, status: :ok
  end
end