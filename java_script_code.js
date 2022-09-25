

// ***************** time****************
setInterval( function() {
    let date_time_display=new Date();
    let hour=date_time_display.getHours();
    let ampm;
    if(hour>=12){
        ampm='pm';

    }else{
        ampm='am';
    }
    hour=hour%12;
    

let redable_format_time=hour+' : '+date_time_display.getMinutes()+' : '+date_time_display.getSeconds()+' '+ampm;
// console.log(redable_format_time);
document.getElementById("timig_id").innerHTML=redable_format_time;
    
}, 1000);

// ***************************** education up down*****************************
let education_title=Array.from(document.querySelectorAll('.cros_to_plus'));
// let education_content=Array.from(document.querySelectorAll('.up_down'));

for(let i in education_title){

    education_title[i].addEventListener('click',up_to_from_down);
   
    function up_to_from_down (e){
        let first_child=education_title[i].children[0];
        let second_child=education_title[i].children[1];
       
   
    if(second_child.style.maxHeight=="0px" || second_child.style.maxHeight=="" ){
       
        first_child.children[1].style.transform="rotate(45deg)";
        second_child.style.maxHeight="120px";


        

    }else{

        first_child.children[1].style.transform="rotate(90deg)";
        second_child.style.maxHeight="0px";

       
    }

    

    }
}


// ***************************** sidebar display*****************************
let hanburger=document.getElementById('hanburger_container');
hanburger.addEventListener('click',change_display);

function change_display(){
    let sid_bar=document.getElementById("sidebar");
    let parent_c=document.getElementById("parent_container");
    // console.log();
    if(sid_bar.style.display=='none' || sid_bar.style.display==''){
        sid_bar.style.display="block";
        sid_bar.style.zIndex="20";
        sid_bar.style.width="275px";
        sid_bar.focus();

        let coding_pro=document.getElementById("coding_profile");
        coding_pro.style.display="none";



    }else{
        sid_bar.style.display='none';
        let coding_pro=document.getElementById("coding_profile");
        coding_pro.style.display="flex";

    }
}


let fix_display_bug=document.getElementById("upper_nav");
console.log(fix_display_bug.style.width);


let preloader=document.getElementById("loader_container");
window.addEventListener("load",function(){
    preloader.style.display="none"
    document.getElementById("drone_container").style.zIndex="4";
    document.getElementById("drone_container").style.filter="invert(0)";
    // drone.document.style.zIndex=4;
    // drone.document.style.filter="invert(0)";
})