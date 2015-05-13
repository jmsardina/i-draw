Rails.application.routes.draw do
  root 'drawings#index'
  post '/cartoons' => 'cartoons#create'
  get '/search' => 'search#create'
  post '/search' => 'search#create'
  post '/' => 'cartoons#create'
end
