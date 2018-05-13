var data=[
  {
    type:"item grouptitle",
    text:"Title"
  },
  {
    type:"item",
    text:"This is an inbox layout."
  },
  {
    type:"item",
    text:"Check one item"
  },
  {
    type:"item",
    text:"Hold down your Shift key"
  },
  {
    type:"item",
    text:"Check a lower item"
  },
  {
    type:"item",
    text:"Everything inbetween should also be set to checked"
  },
  {
    type:"item",
    text:"Try do it"
  },
  {
    type:"item",
    text:"avaScript"
  },
  {
    type:"item",
    text:"Good Luck!"
  },

];

function fetchListItems(data){
  var itemsHtml="";
  data.forEach(function(elem){
    itemsHtml+=`<div class="${elem.type}">
                  <input type="checkbox">
                  <p>${elem.text}</p>
                </div>`
  });

  $("#checkList").empty();
  $("#checkList").append(itemsHtml);
}
fetchListItems(data);

var checkboxes=$('.inbox input[type="checkbox"]');
var lastChecked=false;
checkboxes.on("click",handleChecked);
function handleChecked(e){

  var self=this;
  var parent=$(this).parent();
  var isGroupItem=parent.hasClass("grouptitle");
  var siblingCheckboxs=parent.siblings().find("input").toArray();
  var checkedSiblingCheckboxes=$(".inbox .item:not(.grouptitle)").find("input:checked").toArray();
  if(isGroupItem){
    siblingCheckboxs.forEach(function(elem){
      elem.checked=self.checked;
    })
  }else{
    if(checkedSiblingCheckboxes.length===siblingCheckboxs.length){
      $(".item.grouptitle").find("input").prop("checked",true)
    }else{
      $(".item.grouptitle").find("input").prop("checked",false)
    }
    var inBetween=false;
    if(e.shiftKey && this.checked &&checkedSiblingCheckboxes.length>1){
      var checkboxArray=checkboxes.toArray();
      checkboxArray.forEach(function(elem){
        if(elem===self || elem===lastChecked){
          inBetween=!inBetween;
        }
        if(inBetween){
          elem.checked=true;
        }
      });
    }

  }




  lastChecked=this;
}
