const myEmojis = ["👨‍💻","🕋","💸"]
const emojiContainer = document.getElementById("emoji-container")
const inputEl = document.getElementById("input-el")
const beginBtn = document.getElementById("begin-btn")
const endBtn  = document.getElementById("end-btn")
const removeBgnBtn = document.getElementById("delete-from-begin")
const removeEndBtn = document.getElementById("delete-from-end")
renderEmojis()
beginBtn.addEventListener("click",function(){
    if(inputEl.value){
        myEmojis.unshift(inputEl.value)
        inputEl.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
    
})

endBtn.addEventListener("click",function(){
    if(inputEl.value){
        myEmojis.push(inputEl.value)
        inputEl.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }

})
removeBgnBtn.addEventListener("click",function(){
    
        myEmojis.shift()
        emojiContainer.innerHTML = ""
        renderEmojis()


})
removeEndBtn.addEventListener("click",function(){
        myEmojis.pop()
        emojiContainer.innerHTML = ""
        renderEmojis()

})

function renderEmojis(){
    for(let i = 0 ; i < myEmojis.length;i++){
        const emojiEl  = document.createElement("span")
        emojiEl.textContent = myEmojis[i]
        emojiContainer.append(emojiEl)
        }
    
}
