function tall(){
  if(document.getElementsByClassName("list")[0].style.display == "none"){
  document.getElementsByTagName("span")[2].style.width = "100%";
  document.getElementsByClassName("list")[0].style.display = "block";
  
} else {
  document.getElementsByTagName("span")[2].style.width = "60%";
  document.getElementsByClassName("list")[0].style.display = "none";
}
}
document.getElementsByTagName("body")[0]. onscroll = function(){
  document.getElementsByClassName("list")[0].style.display = "none";
  document.getElementsByTagName("span")[2].style.width = "60%";
}




