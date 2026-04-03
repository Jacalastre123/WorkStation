const popup = document.getElementById("popup")
    const notifBar = document.getElementById("notifBar")
    let money = 0
    let start = false
    let randNum = 4
    let random = Math.floor(Math.random() * randNum)
    let bg = "PopupBg/Stickynote.png"
    
    let isDragging = false
    function store() {
        const storeLog = document.getElementById("store")
        const BGStore = storeLog.querySelector("#BGStore")
        const moneyID = document.getElementById("money")
        storeLog.showModal()
        BGStore.innerText = ""
        Object.values(BgListo).forEach((item, index) => {
            const newDiv = document.createElement("div")
            newDiv.className = "storeBg"
            BGStore.appendChild(newDiv)
            const img = document.createElement("img")
            img.src = item.image
            img.className = "display"
            newDiv.appendChild(img)
             const titles = document.createElement("h5")
            titles.innerText = Object.keys(BgListo)[index]
            newDiv.appendChild(titles)
      
            const p = document.createElement("p")
            p.innerText = item.paid ? "Already Paid" : "$" + item.cost
            newDiv.appendChild(p)
            newDiv.addEventListener('click', event => {
                if (item.paid) {
                    bg = item.image
                }
             
                else if (item.cost <= money) {
                    item.paid = true
                    money -= item.cost
                    bg = item.image
                    moneyID.innerText = "Money: " + money
                }
                   storeLog.close()
                  document.querySelectorAll(".box").forEach(item => {
                    item.style.backgroundImage = "url('" + bg + "')"
                  })
            })
          
        })
    }
    function setUp() {
        document.body.style.backgroundSize = screen.width + "px " + screen.height + "px"
         document.querySelectorAll(".box").forEach(item => {
 const deletes = document.getElementById("delete")
      let offsetY = 0
    let offsetX = 0
    let current = null
    item.addEventListener("pointerdown", e => {
        
        current = item
        offsetX = e.clientX - item.offsetLeft
        offsetY = e.clientY - item.offsetTop

    })

    document.addEventListener("pointermove", e => {
        if (current){
            item.style.left = (e.clientX - offsetX) + "px"
            item.style.top = (e.clientY - offsetY) + "px"
            
          
    }})

    item.addEventListener("pointerup", () => {
        current = null
           
        
    })
    })
    }
    setUp()
   function allocate() {
            return Object.keys(CompListo)[random]
        }

    function Notif(company, descript) {
        
        
        const notif = document.createElement("div")
        notif.className = "Notif"
        notif.innerHTML = "<h4>" + company + "</h4><p>" + descript + "</p>"
        notifBar.appendChild(notif)
        if (document.querySelectorAll(".Notif")[1]) {
            document.querySelectorAll(".Notif")[0].remove()
        }
setTimeout(function() { notif.remove()}, 10000)
    }
    function submit() {
         
        
        const popClone = popup.content.cloneNode(true)
        const titleBar = popClone.querySelector("#titleBar")
        const info = popClone.querySelector("#info")
        const box = popClone.querySelector("#box")
        const imag = popClone.querySelector("#imag")
        const close = popClone.querySelector("#close")
        const title = document.getElementById("title")
        const infoInput = document.getElementById("inform")
        const neccesary = document.getElementById("neccesary")
        const deletes = document.getElementById("delete")
             let offsetY = 0
    let offsetX = 0
    let current = null
     close.addEventListener("click", event => {
        box.style.animation = "squeeze 0.5s"
        setTimeout(() => {
            box.remove()
        }, 500)
     })
        
        if ( !start || keyWords[allocate()].length === 0 && title.value.trim !== "") {
            keyWords = JSON.parse(JSON.stringify(keyWordsBackup))
    
            
       
if (start) {
    box.style.backgroundImage = "url('" + bg + "')"
        document.body.appendChild(popClone)

       
        imag.src = CompListo[allocate()].image
        
        titleBar.innerText = title.value 
        
        info.innerText = infoInput.value
	 
        }

       
    box.addEventListener("pointerdown", e => {
       
        current = box
        offsetX = e.clientX - box.offsetLeft
        offsetY = e.clientY - box.offsetTop
       
    })

    document.addEventListener("pointermove", e => {
        if (current){
            box.style.left = (e.clientX - offsetX) + "px"
            box.style.top = (e.clientY - offsetY) + "px"
             const popupRect = box.getBoundingClientRect()
            const deleteRect = deletes.getBoundingClientRect()
             let collision = !(popupRect.right < deleteRect.left || popupRect.left > deleteRect.right || popupRect.bottom < deleteRect.top || popupRect.top > deleteRect.bottom)
            if (collision) {
                deletes.style.backgroundColor = "red"
            } else {
                deletes.style.backgroundColor = "white"
            }
          
    }})

    document.addEventListener("pointerup", () => {
        current = null
            const popupRect = box.getBoundingClientRect()
            const deleteRect = deletes.getBoundingClientRect()
            const moneyID = document.getElementById("money")
             let collision = !(popupRect.right < deleteRect.left || popupRect.left > deleteRect.right || popupRect.bottom < deleteRect.top || popupRect.top > deleteRect.bottom)
            if (collision) {
                setTimeout(function() {
                    box.remove()
                }, 1000)
                box.style.animation = "squeeze 1s"
                money += 50
                moneyID.innerText = "Money: $" + money
                
            } else {
                
                deletes.style.backgroundColor = "white"
            }
         
    }
        )
     
            start = true
            
            infoInput.value = ""
             random = Math.floor(Math.random() * randNum)
        infoInput.addEventListener("input", event => {
           keyWords[allocate()] = keyWords[allocate()].filter(key => !infoInput.value.toLowerCase().includes(key.toLowerCase()))
           neccesary.innerText = "Neccesary Words: " + keyWords[allocate()].join(", ")
        })
        neccesary.innerText = "Neccesary Words: " + keyWords[allocate()].join(", ")

			let randomWord1 = CompListo[allocate()].items[Math.floor(Math.random() * CompListo[allocate()].items.length)]
        let randomWord2 = CompListo[allocate()].items[Math.floor(Math.random() * CompListo[allocate()].items.length)]
           while (randomWord1 === randomWord2) {
            randomWord1 = CompListo[allocate()].items[Math.floor(Math.random() * CompListo[allocate()].items.length)]
           }
			
        switch (random) {
            case 0:
        Notif(allocate(), "We need a new popup for someone's computer for their delivery of " + randomWord1 + " and " + randomWord2)

        break;
        case 1:
            Notif(allocate(), "We need a new popup for the conversation of " + randomWord1 + " and " + randomWord2)
            break;
        case 2:
            Notif(allocate(), "We need a new popup to the audience for our new news issue. The weather is " + randomWord1 + " at day and " + randomWord2 + " at night.")
            break;
        case 3: 
        Notif(allocate(), "We need your popups to tell my user about " + randomWord1 + " and " + randomWord2)
        break;
        }
    }
    
    }
submit()
