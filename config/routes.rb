Rails.application.routes.draw do
  
  get 'experiments/index'

  get '/testcenter', to: 'testcenter#index'

  get '/metafizzy', to: 'metafizzy#index'

  get '/periodictable', to: 'periodictable#index'
  
  resources :lewisdot
  root 'welcome#index'

end
