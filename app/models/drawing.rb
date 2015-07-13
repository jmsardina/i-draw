class Drawing < ActiveRecord::Base
  COLORS = [
	  			"blue", 
	  			"yellow", 
	  			"red", 
	  			"green", 
	  			"pink", 
	  			"sienna", 
	  			"purple", 
	  			"black", 
	  			"white", 
	  			"orange"
  			]

  TIPS = [1, 3, 6, 9, 12, 15, 18, 21]
  
  CHEERS = [
  				"Well Done!", 
  				"Great Job!", 
  				"You Rock!",
  				"Marvellous!",
  				"You Should Be Proud!"
  			]
end
