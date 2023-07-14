//script for only adding list
const addButton=document.querySelector(".add-list");
const doList=document.querySelector(".list-container");
// let arr=[];
addButton.addEventListener('click',()=>{
    let text=document.querySelector(".txt").value;
    // arr.push(text);
    // console.log(arr);
    // let stm=' ';
    // arr.forEach((element)=>{
    //     stm+=element;
        
    // })
    // doList.innerHTML=stm
    // text.innerHTML=" ";
    if(text==""){
       alert("enter the task");
    }else{
        let ele=document.createElement("p");//create elment ne element create hoto
        //1st
        // let addLine=document.createTextNode(text);
        // ele.appendChild(addLine);
        // doList.appendChild(ele);

        //2nd way
        ele.innerHTML=text;
        doList.appendChild(ele);//jya element/class chay sub tikani takto manje child part madhe
    }
        
})

