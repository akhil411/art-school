window.onload = function(){ 
var modal = document.getElementsByClassName("hamburgerModal")[0];

var btn = document.getElementsByClassName("hamburger-menu")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }
  
  modal.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


var announcementsmodal = document.getElementsByClassName("announcementsModal")[0];

var announcementsbtn = document.getElementsByClassName("announcements-logo")[0];

var span = document.getElementsByClassName("announcementsModal-close")[0];

announcementsbtn.onclick = function() {
  announcementsmodal.style.display = "block";
  }
  
  span.onclick = function() {
    announcementsmodal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == announcementsmodal) {
      announcementsmodal.style.display = "none";
    }
  }
};