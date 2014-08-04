var Controller = {
  initialize: function(model, view){
    this.model = model;
    this.view = view;
    this.snake = Snake;
    this.snake.initialize();
  },
  bindEventListeners: function(){
    this.subscribe(this);
    $(document).on('keydown', this.model.handler);
  },
  moveSnake: function(direction){
    if (direction == "left"){
      this.view.leftSnake(document.getElementsByClassName('snake'));
    } else if (direction == "up"){
      this.view.upSnake(document.getElementsByClassName('snake'));
    } else if (direction == "right"){
      this.view.rightSnake(document.getElementsByClassName('snake'));
    } else if (direction == "down"){
      this.view.downSnake(document.getElementsByClassName('snake'));
    }
  },
  growSnake: function(){
    this.snake.length++;
  },
  moveFood: function(){
    this.view.animateFood();
  },
  subscribe: function(self){
    $(document).on("eat", function(){
      self.model.increaseSnakeLength(self);
      self.moveFood(self);
    })
  },
  die: function(){
    this.view.resetScore();
  },
  moveEnemy: function(enemy, index){
    this.view.animateEnemy(enemy, index)
  }
}
