var View = {
  leftSnake: function(){
    $('.snake').animate({"left": String(Math.round($('.snake').css('left').slice(0, -2)/10)*10 - 10) }, "fast" );
  },
  upSnake: function(){
    $('.snake').animate({"top": String(Math.round($('.snake').css('top').slice(0, -2)/10)*10 - 10) } , "fast" );
  },
  rightSnake: function(){
    $('.snake').animate({"left": String(Math.round($('.snake').css('left').slice(0, -2)/10)*10 + 10) } , "fast" );
  },
  downSnake: function(){
    $('.snake').animate({"top": String(Math.round($('.snake').css('top').slice(0, -2)/10)*10 + 10) } , "fast" );
  },
  animateFood: function (event){
    $('.food').css("top", String((Math.round(Math.random()*40)*10)+100) + "px");
    $('.food').css("left", String((Math.round(Math.random()*40)*10)+100) + "px");
    var currentScore = parseInt($('#score').text());
    currentScore++;
    $('#score').text(currentScore)
  },
  resetScore: function(){
    $('#score').text(0);
  },
  animateEnemy:function(enemy, index){
    var enemy = $('.enemy').eq(index);
    var direction = ['left', 'up', 'right', 'down'][Math.floor(Math.random()*4)]
    $('.enemy').clearQueue();
    if (direction == 'up' && enemy.css('top') > "100px"){
      enemy.animate({"top": String(Math.round(enemy.css('top').slice(0, -2)/10)*10 - 10) } , "fast" );
    } else if (direction == 'left' && enemy.css('left') > "100px"){
      enemy.animate({"left": String(Math.round(enemy.css('left').slice(0, -2)/10)*10 - 10) }, "fast" );
    } else if (direction == 'down' && enemy.css('top') < "590px"){
      enemy.animate({"top": String(Math.round(enemy.css('top').slice(0, -2)/10)*10 + 10) } , "fast" );
    } else if (direction == 'right' && enemy.css('left') < "590px"){
      enemy.animate({"left": String(Math.round(enemy.css('left').slice(0, -2)/10)*10 + 10) } , "fast" );
    }
  }
}

