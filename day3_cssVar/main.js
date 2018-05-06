var inputElems=$(".controls input");
inputElems.on("change",handleUpdate)
inputElems.on("mousemove",handleUpdate)
function handleUpdate(){
  var suffix=this.dataset.sizing||'';
  $('html').css(`--${this.name}`, this.value+suffix);
}
