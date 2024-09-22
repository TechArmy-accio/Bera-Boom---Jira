
let token = localStorage.getItem('token');

let login_json = localStorage.getItem('login');
let login_list
if(login_json != null){
    login_list = JSON.parse(login_json);
}

let users_json = localStorage.getItem('users');
let user_list
if(users_json != null){
    user_list = JSON.parse(users_json);
}


let email
if(login_list){
    
     email = login_list[token];
     console.log(email)
}




// let biraDataJson = localStorage.getItem("data")
// let biraData = {}
// if(biraDataJson){
    let biraData = user_list[email]["data"] || {}
// }




console.log("1",biraData)






let addCard = document.getElementById("add-card")

let todoContainer = document.querySelector(".todo-card-container") // to do


// let count = 1

for(let cardKey in biraData){
    createCard(null, cardKey,  biraData[cardKey].title,biraData[cardKey].column )
}
addCard.addEventListener("click", createCard)


function createCard(e, cardId, title, columnId){
        let superCard = document.createElement("div")
        superCard.className = "superCard"
        let card = document.createElement("div")
        card.className = "card"
        card.id=  cardId || "card" + generateId()
        card.innerText = title || "New Card"
        console.log("xxy", e)
        card.style.color =  e ? "grey": "black"
        card.contentEditable = true
          
        superCard.append(card)
        // console.log(columnId)
        if(columnId && columnId!="todo"){
            let toBeattachedColumn =   document.getElementById(columnId)
            toBeattachedColumn.append(superCard)
        }
        else{
          todoContainer.append(superCard)
        }
   
        e && card.focus()
   
        card.addEventListener("click", ()=>{
             if(card.innerText=="New Card"){
               card.innerText = ""
                card.style.color = "black"
             }
        })
       //  let prev = "New Card"
        let flag = false
   //      card.addEventListener("input", ()=>{
   //         if(card.innerText!="New Card" && flag==false){
   //           card.innerText = card.innerText.slice(0,-8)
   //            card.style.color = "black"
   //            flag=true
   //         }
   //    })
   
       card.addEventListener("keydown", (e)=>{
           if(!flag){
             card.innerText = ""
             flag=true
             card.style.color = "black"
           }
       })
   
       card.addEventListener("blur", ()=>{
          console.log("1", biraData)
           biraData[card.id] = {title: card.innerText, column: biraData[card.id]?.column || "todo"}
           console.log("2", biraData)
           addToLocalStorage(biraData)
   
       })
       
       
   // 
   
     let select = document.createElement("select")
      select.innerHTML = `
           <option value="todo">ToDO</option>
          <option value="inProgress">Progress</option>
          <option value="done">Done</option>
      `
   
      select.className = "dropdown"
   
      superCard.append(select)
   
   
      select.addEventListener("change",(e)=>{
         let selectValue = select.value
         let columnToBeMoved =  document.getElementById(selectValue)
         columnToBeMoved.append(superCard)
   
         biraData[card.id].column = selectValue
         
         console.log("3", biraData)
   
         addToLocalStorage(biraData)

      })
}
   



// window.addEventListener("keydown", (e)=>{
//     console.log("press",e.key)
// })

// window.addEventListener("keyup", (e)=>{
//     console.log("relsease",e.key)
// })



// [
//     {}
// ]




function addToLocalStorage(biraData){
    user_list[email].data = biraData
    localStorage.setItem("users", JSON.stringify(user_list))
}




function generateId(){
    let collection = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(<>?){}[]";

    let str = ""
    for(let i = 1; i<=8; i++){
       let index = Math.floor(Math.random() * collection.length);
    str = str + collection[index]
    }

    let id = "card"+str
    let card = document.getElementById(id)

    if(card !=null){
        return generateId()
    }


    return str;
}




function logout(){
    localStorage.removeItem("token")
    let superCard = document.querySelectorAll(".superCard")

    for(let i = 0; i<superCard.length; i++){
        superCard[i].remove()
    }
    window.location.href = "login.html"
}