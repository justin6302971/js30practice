
function Clock(eleId){
  this.id=eleId;
  this.clockElem=$(`#${eleId}`);
  this.hourHand=this.clockElem.find(".hour-hand");
  this.minHand=this.clockElem.find(".min-hand");
  this.secondhand=this.clockElem.find(".second-hand");

  this.intervalInstance=undefined;
}

Clock.prototype.setDatetime=function(){

  var elementId=this.id;

  var now=new Date();
  var secondHandElem=this.secondhand;
  var seconds=now.getSeconds();
  var secondDegrees=((seconds/60)*360)+90;
  secondHandElem.css({"transform":`rotate(${secondDegrees}deg)`})


  var minHandElem=this.minHand;
  var mins=now.getMinutes();
  var minDegrees=((mins/60)*360)+90;
  minHandElem.css({"transform":`rotate(${minDegrees}deg)`});

  var hourHandElem=this.hourHand;
  var hours=now.getHours();
  var hourDegrees=((hours/12)*360)+90;
  hourHandElem.css({"transform":`rotate(${hourDegrees}deg)`});


}

Clock.prototype.run=function(){
  var self=this;
  this.intervalInstance= setInterval(function(){
      return self.setDatetime();
  }, 1000);

}
//
Clock.prototype.stop=function(){

  clearInterval(this.intervalInstance);
}
