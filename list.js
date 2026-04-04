const BgListo = JSON.parse(localStorage.getItem("bg")) || {
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
        cost: 450
    },
    "Messanger": {
        image: "PopupBg/Messanger.png",
        paid: false,
        cost: 600
    },
    "News Station": {
        image: "PopupBg/News.png",
        paid: false,
        cost: 950
    },
    "Light": {
        image: "PopupBg/Light.png",
        paid: false,
        cost: 1150
    },

    "Stars": {
        image: "PopupBg/Stars.png",
        paid: false,
        cost: 1400
    },
    "Calender": {
        image: "PopupBg/CalenderBg.png",
        paid: false,
        cost: 1700 
    },

    "Settings": {
        image: "PopupBg/Settings.png",
        paid: false,
        cost: 1900,
    },
    "Game": {
        image: "PopupBg/Game.png",
        paid: false,
        cost: 2250,
    },
    
    "Sunset": {
        image: "PopupBg/Sunset.png",
        paid: false,
        cost: 2500
    },
    "River": {
        image: "PopupBg/River.png",
        paid: false,
        cost: 2900
    },
    "Corner Island": {
        image: "PopupBg/Corner-Island.png",
        paid: false,
        cost: 3500
    }

}
    const CompListo = {
        "Delivery Store": {
            image: "Logo/DeliverALL.png",
           items: ["Pepperoni Pizza", "Cola", "Cheese Pizza", "Chips", "Mega Pizza", "Salad", "Chicken Nuggets", "Delayed"]


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
        },
          "Calender": {
            image: "Logo/Calender.png",
            items: ["Merry Christmas", "Tax Time", "Event",  "Holiday", "Appointment", "Due", "Near"]
        },
         "Game": {
            image: "Logo/Gaming.png",
            items: ["Ready", "Scoring", "Try Again", "Come Back", "wants to play", "username", "streak", "request", "friend"]
        },


    }
    function backUP() {  return {
        "Delivery Store": [
            "deliver", "pay", "tip", CompListo["Delivery Store"].items[Math.floor(Math.random() * CompListo["Delivery Store"].items.length)], CompListo["Delivery Store"].items[Math.floor(Math.random() * CompListo["Delivery Store"].items.length)]
        ],
        "Messanger": [
            "said", "New", "Message!", CompListo["Messanger"].items[Math.floor(Math.random() * CompListo["Messanger"].items.length)],CompListo["Messanger"].items[Math.floor(Math.random() * CompListo["Messanger"].items.length)]
        ], 
        "News Station": [
            "News", "Report", "issue", CompListo["News Station"].items[Math.floor(Math.random() * CompListo["News Station"].items.length)], CompListo["News Station"].items[Math.floor(Math.random() * CompListo["News Station"].items.length)] 
        ],
        "Settings": [
            "Username", "it", "was", CompListo["Settings"].items[Math.floor(Math.random() * CompListo["Settings"].items.length)], CompListo["Settings"].items[Math.floor(Math.random() * CompListo["Settings"].items.length)] 
        ],
        "Calender": [
            "Alert", "day", "time", CompListo["Calender"].items[Math.floor(Math.random() * CompListo["Calender"].items.length)], CompListo["Calender"].items[Math.floor(Math.random() * CompListo["Calender"].items.length)] 
        ],
        "Game": [
            "User", "game", "you", CompListo["Game"].items[Math.floor(Math.random() * CompListo["Game"].items.length)], CompListo["Game"].items[Math.floor(Math.random() * CompListo["Game"].items.length)] 
        ]
    }
    
   
    }
    let keyWords = backUP()
