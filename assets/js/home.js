/*-----------------------------  scroll animation-1 start -------------------------------------*/
const animation1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.classList.add('scroll-1');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.scroll-animation-1').forEach((el) => animation1.observe(el));
/*-----------------------------  scroll animation-2 start -------------------------------------*/
const animation2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      entry.target.classList.add('scroll-2');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.scroll-animation-2').forEach((el) => animation2.observe(el));
//-------------------------------closer look home img changer-------------------------------//

function changeImageWithAnimation(newSrc) {
    const imgElement = document.getElementById("closer_look_img");

    imgElement.classList.remove("fade-animation");

    imgElement.src = newSrc;

    void imgElement.offsetWidth; 
    
    imgElement.classList.add("fade-animation");
}

document.getElementById("orange_circle").onclick = function (){
  changeImageWithAnimation("./assets/images/cosmic_orange_iphone.jpg");
  document.getElementById("color-Name").innerHTML = "Orange";
};

document.getElementById("blue_circle").onclick = function (){
  changeImageWithAnimation("./assets/images/deep_blue_iphone.jpg");
  document.getElementById("color-Name").innerHTML = "Deep Blue";
};

document.getElementById("silver_circle").onclick = function (){
  changeImageWithAnimation("./assets/images/silver_iphone.jpg");
  document.getElementById("color-Name").innerHTML = "Silver";
};

document.getElementById("color").onclick = function(){
  this.classList.add("closer_after");
  document.getElementById("feature_description").style ="display: block";
  document.getElementById("closer_circle").style ="opacity: 1";
  document.getElementById("featutre_title").innerHTML ="Color";
  document.getElementById("featutre_p").innerHTML ="Choose from three bold finishes. iPhone 17 Pro shown in Cosmic <b id='color-Name'> Orange</b>.";
  changeImageWithAnimation("./assets/images/cosmic_orange_iphone.jpg");
  document.getElementById("closer_look_img").style="object-position: 68%";
  document.getElementById("aluminum_unibody").classList.remove("closer_after");
  document.getElementById("vapor_chamber").classList.remove("closer_after");
  document.getElementById("ceramic_shield").classList.remove("closer_after");
  document.getElementById("immersive_pro_display").classList.remove("closer_after");
  document.getElementById("camera_control").classList.remove("closer_after");
  document.getElementById("action_button").classList.remove("closer_after"); 
};

document.getElementById("aluminum_unibody").onclick = function(){
  this.classList.add("closer_after");
  document.getElementById("feature_description").style ="display: block";
  document.getElementById("closer_circle").style ="opacity: 0";
  document.getElementById("featutre_title").innerHTML ="Aluminum Unibody";
  document.getElementById("featutre_p").innerHTML ="Optimized for performance and battery. Aluminum alloy is remarkably light and has exceptional thermal conductivity.";
  changeImageWithAnimation("./assets/images/aluminum_unibody.jpg");
  document.getElementById("closer_look_img").style="object-position: 68%";
  document.getElementById("color").classList.remove("closer_after");
  document.getElementById("vapor_chamber").classList.remove("closer_after");
  document.getElementById("ceramic_shield").classList.remove("closer_after");
  document.getElementById("immersive_pro_display").classList.remove("closer_after");
  document.getElementById("camera_control").classList.remove("closer_after");
  document.getElementById("action_button").classList.remove("closer_after"); 
};

document.getElementById("vapor_chamber").onclick = function(){
  this.classList.add("closer_after");
  document.getElementById("feature_description").style ="display: block";
  document.getElementById("closer_circle").style ="opacity: 0";
  document.getElementById("featutre_title").innerHTML ="Vapor Chamber";
  document.getElementById("featutre_p").innerHTML ="Deionized water sealed inside moves heat away from the A19 Pro chip, allowing for even higher sustained performance.";
  changeImageWithAnimation("./assets/images/vapor_chamber.jpg");
  document.getElementById("closer_look_img").style="object-position: 68%";
  document.getElementById("color").classList.remove("closer_after");
  document.getElementById("aluminum_unibody").classList.remove("closer_after");
  document.getElementById("ceramic_shield").classList.remove("closer_after");
  document.getElementById("immersive_pro_display").classList.remove("closer_after");
  document.getElementById("camera_control").classList.remove("closer_after");
  document.getElementById("action_button").classList.remove("closer_after"); 
};

document.getElementById("ceramic_shield").onclick = function(){
  this.classList.add("closer_after");
  document.getElementById("feature_description").style ="display: block";
  document.getElementById("closer_circle").style ="opacity: 0";
  document.getElementById("featutre_title").innerHTML ="Ceramic Shield";
  document.getElementById("featutre_p").innerHTML ="Protects the back of iPhone 17 Pro, making it 4x more resistant to cracks.4 New Ceramic Shield 2 on the front has 3x better scratch resistance.5";
  changeImageWithAnimation("./assets/images/ceramic_shield.jpg");
  document.getElementById("closer_look_img").style="object-position: 68%";
  document.getElementById("color").classList.remove("closer_after");
  document.getElementById("aluminum_unibody").classList.remove("closer_after");
  document.getElementById("vapor_chamber").classList.remove("closer_after");
  document.getElementById("immersive_pro_display").classList.remove("closer_after");
  document.getElementById("camera_control").classList.remove("closer_after");
  document.getElementById("action_button").classList.remove("closer_after"); 
};

document.getElementById("immersive_pro_display").onclick = function(){
  this.classList.add("closer_after");
  document.getElementById("feature_description").style ="display: block";
  document.getElementById("closer_circle").style ="opacity: 0";
  document.getElementById("featutre_title").innerHTML ="Immersive Pro Display";
  document.getElementById("featutre_p").innerHTML ="Our best-ever 6.3-inch and 6.9-inch Super Retina XDR displays.6 Brighter. Better anti-reflection. ProMotion up to 120Hz.";
  changeImageWithAnimation("./assets/images/immersive_pro_display.jpg");
  document.getElementById("closer_look_img").style="object-position: 68%";
  document.getElementById("color").classList.remove("closer_after");
  document.getElementById("aluminum_unibody").classList.remove("closer_after");
  document.getElementById("vapor_chamber").classList.remove("closer_after");
  document.getElementById("ceramic_shield").classList.remove("closer_after");
  document.getElementById("camera_control").classList.remove("closer_after");
  document.getElementById("action_button").classList.remove("closer_after"); 
};

document.getElementById("camera_control").onclick = function(){
  this.classList.add("closer_after");
  document.getElementById("feature_description").style ="display: block";
  document.getElementById("closer_circle").style ="opacity: 0";
  document.getElementById("featutre_title").innerHTML ="Camera Control";
  document.getElementById("featutre_p").innerHTML ="Instantly take a photo, record video, adjust settings, and more. So you never miss a moment.";
  changeImageWithAnimation("./assets/images/camera_control.jpg");
  document.getElementById("closer_look_img").style="object-position: 68%";
  document.getElementById("color").classList.remove("closer_after");
  document.getElementById("aluminum_unibody").classList.remove("closer_after");
  document.getElementById("vapor_chamber").classList.remove("closer_after");
  document.getElementById("ceramic_shield").classList.remove("closer_after");
  document.getElementById("immersive_pro_display").classList.remove("closer_after");
  document.getElementById("action_button").classList.remove("closer_after"); 
};

document.getElementById("action_button").onclick = function(){
  this.classList.add("closer_after");
  document.getElementById("feature_description").style ="display: block";
  document.getElementById("closer_circle").style ="opacity: 0";
  document.getElementById("featutre_title").innerHTML ="Action Button";
  document.getElementById("featutre_p").innerHTML ="A customizable fast track to your favorite feature. Long press to launch the action you want — Silent mode, Translation, Shortcuts, and more.";
  changeImageWithAnimation("./assets/images/action_button.jpg");
  document.getElementById("closer_look_img").style="object-position: 68%";
  document.getElementById("color").classList.remove("closer_after");
  document.getElementById("aluminum_unibody").classList.remove("closer_after");
  document.getElementById("vapor_chamber").classList.remove("closer_after");
  document.getElementById("ceramic_shield").classList.remove("closer_after");
  document.getElementById("immersive_pro_display").classList.remove("closer_after");
  document.getElementById("camera_control").classList.remove("closer_after");
};
document.getElementById("cancle_icon").onclick = function(){
  changeImageWithAnimation("./assets/images/closer_look_home.jpg");
  document.getElementById("closer_look_img").style="object-position: 100";
  document.getElementById("feature_description").style ="display: none";
  document.getElementById("color").classList.remove("closer_after");
  document.getElementById("aluminum_unibody").classList.remove("closer_after");
  document.getElementById("vapor_chamber").classList.remove("closer_after");
  document.getElementById("ceramic_shield").classList.remove("closer_after");
  document.getElementById("immersive_pro_display").classList.remove("closer_after");
  document.getElementById("camera_control").classList.remove("closer_after");
  document.getElementById("action_button").classList.remove("closer_after"); 
};