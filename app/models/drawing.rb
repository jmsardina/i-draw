class Drawing < ActiveRecord::Base
  COLORS = ["blue", "yellow", "red", "green", "pink", "brown", "purple", "black", "white", "orange"]
  TIPS = ((1..10).to_a)
end
