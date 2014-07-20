class BooksController < ApplicationController

  def index
    render json: Book.all
  end

  def create
    book = Book.new params[:book]
    book.save!
    render json: book
  end

  def destroy
    book = Book.find params[:id]
    book.destroy
    render json: book
  end
end
