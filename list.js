const BgListo = {
    "StickyNote": {
        image: "PopupBg/Stickynote.png",
        paid: true,
        cost: 0
    },

    "Food": {
        image: "PopupBg/Food.png",
        paid: false,
        cost: 250
    },
    "Sky": {
        image: "PopupBg/Sky.png",
        paid: false,
        cost: 400
    },
    "Messanger": {
        image: "PopupBg/Messanger.png",
        paid: false,
        cost: 500
    },
    "News Station": {
        image: "PopupBg/News.png",
        paid: false,
        cost: 850
    },
    "Light": {
        image: "PopupBg/Light.png",
        paid: false,
        cost: 1050
    },
    "Settings": {
        image: "PopupBg/Settings.png",
        paid: false,
        cost: 1200,
    },
    "Sunset": {
        image: "PopupBg/Sunset.png",
        paid: false,
        cost: 1500
    }
}
    const CompListo = {
        "Delivery Store": {
            image: "Logo/DeliverAll.png",
           items: ["Pepperoni Pizza", "Cola", "Cheese Pizza", "Chips", "Mega Pizza", "Salad"]


        },
        "Messanger": {
            image: "Logo/MessangerLogo.png",
            items:["Shelly", "John", "Sally", "Camson", "Gordon", "Bot", "Hugh", "Johanna", "Bella"]
        },
        "News Station": {
            image: "Logo/NewsLogo.png",
            items: ["Sunny", "Rain", "Cloudy", "Partly Cloudy", "Sunshine"]
        },
        "Settings": {
            image: "Logo/Settings.png",
            items: ["Download Success", "Error", "Problem", "Can't connect", "Successful", "Changed"]
        }

    }
     let keyWordsBackup = {
        "Delivery Store": [
            "deliver", "pay", "tip", CompListo["Delivery Store"].items[Math.floor(Math.random() * CompListo["Delivery Store"].items.length)],CompListo["Delivery Store"].items[Math.floor(Math.random() * CompListo["Delivery Store"].items.length)]
        ],
        "Messanger": [
            "said", "New", "Message!", CompListo["Messanger"].items[Math.floor(Math.random() * CompListo["Messanger"].items.length)],CompListo["Messanger"].items[Math.floor(Math.random() * CompListo["Messanger"].items.length)]
        ], 
        "News Station": [
            "News", "Report", "issue", CompListo["News Station"].items[Math.floor(Math.random() * CompListo["News Station"].items.length)], CompListo["News Station"].items[Math.floor(Math.random() * CompListo["News Station"].items.length)] 
        ],
        "Settings": [
            "Username", "it", "was", CompListo["Settings"].items[Math.floor(Math.random() * CompListo["Settings"].items.length)], CompListo["Settings"].items[Math.floor(Math.random() * CompListo["Settings"].items.length)] 
        ]
    }
    let keyWords = JSON.parse(JSON.stringify(keyWordsBackup))
   