let myImage = document.getElementById('img');


setInterval(()=>{
    let inputValue = document.getElementById("nme")
    if(inputValue.value===""){
        myImage.src = "./images/profile.jpeg"
    }
    else{
    myImage.src = `//joeschmoe.io/api/v1/${inputValue.value}`
    }
},3000)

