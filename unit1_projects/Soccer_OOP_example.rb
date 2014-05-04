class Chelsea
    $max_players_on_field = 11 #global variable, accessible from any part of a program. 
	@@captain = nil #class variable, can be changed by any instance, value is equal for all objects 
	@@roster = [] #class varaible
	def initialize (player_name, position, number)
		@player_name = player_name #instance variable, only assigned when a particular instance of 
								   #Chelsea is called.
		@position = position #instance variable
		@number = number #instance variable
		@@roster << player_name #local variable, only accessible in this specific loop of code.
	end
	def make_captain
		@@captain = @player_name
	end
	def self.captain
		@@captain
	end
	def self.roster
		@@roster
	end
end

edenHazard = Chelsea.new("Eden Hazard", "Midfield", 17)
petrCech = Chelsea.new("Petr Cech", "Goalkeeper", 1)
johnTerry = Chelsea.new("John Terry", "Defender", 2)

Chelsea.captain # => nil
johnTerry.make_captain # => "John Terry"
Chelsea.roster # => ["Eden Hazard", "Petr Cech", "John Terry"]