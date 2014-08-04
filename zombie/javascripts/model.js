var Model = {
  handler: function (event){
    $('.snake').clearQueue();
    if (event.which == 37 && eval($('.snake').css("left").slice(0,-2)) > eval($('#board').css("left").slice(0,-2))){
      Controller.moveSnake("left")
    } else if (event.which == 38 && eval($('.snake').css("top").slice(0,-2)) > eval($('#board').css("top").slice(0,-2))){
      Controller.moveSnake("up");
    } else if (event.which == 39 && eval($('.snake').css("left").slice(0,-2)) < eval($('#board').css("width").slice(0,-2))-10){
      Controller.moveSnake("right");
    } else if (event.which == 40 && eval($('.snake').css("top").slice(0,-2)) < eval($('#board').css("height").slice(0,-2))-10){
      Controller.moveSnake("down");
    }
    if($('.snake').css("top").slice(0,-2) == $('.food').css("top").slice(0,-2)  && $('.snake').css("left").slice(0,-2) == $('.food').css("left").slice(0,-2)){
      $(document).trigger("eat");
    }
    for(var enemyIndex = 0; enemyIndex < $('.enemy').size(); enemyIndex++){
      if($('.snake').css("top").slice(0,-2) == $('.enemy').eq(enemyIndex).css("top").slice(0,-2) && $('.snake').css("left").slice(0,-2) == $('.enemy').eq(enemyIndex).css("left").slice(0,-2)){
        Controller.die();
      }
    }
    Model.chooseEnemyDirection();
  },
  increaseSnakeLength: function(){
    Controller.growSnake();
  },
  chooseEnemyDirection: function(){
    var enemyCount = 0;
    $('.enemy').each(function(){
      Controller.moveEnemy(this, enemyCount);
      enemyCount++;
    })
  }
}
