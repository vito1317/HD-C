color_val = 'red';
let htm_code = document.querySelector("textarea#htm_code");
let num_inp = document.querySelector("input#num");
let num_text = document.querySelector("span#num_text");
let date_inp = document.querySelector("input#date");
htm_code_1 = '<h3 style="color:';
htm_code_2 = '">工作崗位號碼:';
htm_code_3 = '<br>檢定日期:';
htm_code_4 = '<br>應檢人姓名:'
htm_code_5 = '</h3>';
date_inp.addEventListener("change",function(){
    code_update()
});
num_inp.addEventListener("change",function(){
    if(num_inp.value < 10 && num_inp.value >= 1 && !num_inp.value.includes(0)){
        num_inp.value = "0"+num_inp.value;
    }
    if(num_inp.value.length > 2){
        num_inp.value = num_inp.value.substr(0,2)
    }
    if(num_inp.value.length == 2){
        console.log(num_inp.value)
        num_text.innerHTML=num_inp.value;
        num_text_1.innerHTML=num_inp.value;
        num_text_2.innerHTML=num_inp.value;
        code_update()
    }
    
});
num_inp.addEventListener("keyup",function(){
    if(num_inp.value < 10 && num_inp.value >= 1 && !num_inp.value.includes(0)){
        num_inp.value = "0"+num_inp.value;
    }
    if(num_inp.value.length > 2){
        num_inp.value = num_inp.value.substr(1,3)
    }
    if(num_inp.value.length == 2){
        console.log(num_inp.value)
        num_text.innerHTML=num_inp.value;
        num_text_1.innerHTML=num_inp.value;
        num_text_2.innerHTML=num_inp.value;
        code_update()
    }
});
let color_inp = document.querySelector("div#color_area");
let htm_result = document.querySelector("div#htm>h3");
color_inp.addEventListener("click",function(){
    console.log(color_val);
    htm_result.style.color=color_val;
    code_update()
});

let name_inp = document.querySelector("input#name");
let name_text = document.querySelector("span#name_text");
name_inp.addEventListener("keyup",function(){
    if(name_inp.value.length == 3){
        console.log(name_inp.value)
        name_text.innerHTML=name_inp.value;
        code_update()
    }
    
});
function date(){
    if(!date_inp.value){
        let currentDate = new Date();

        let year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
        let day = currentDate.getDate().toString().padStart(2, '0');

        let formattedDate = `${year}/${month}/${day}`;

        return formattedDate;
    }else{
        
        return date_inp.value.replace(/-/gi,'/')
    }
    
}
function code_update(){
    if(!name_inp.value && !num_inp.value){
        htm_code.value=htm_code_1+color_val+htm_code_2+'xx'+htm_code_3+date()+htm_code_4+'xxx'+htm_code_5;
        document.getElementById("htm").innerHTML = htm_code.value
    }else{
        htm_code.value=htm_code_1+color_val+htm_code_2+num_inp.value+htm_code_3+date()+htm_code_4+name_inp.value+htm_code_5;
        document.getElementById("htm").innerHTML = htm_code.value
    }
}
code_update()