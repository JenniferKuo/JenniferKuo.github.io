let details = {
    "Belongings": {
        "title": "Belongings",
        "year": "2018",
        "gallery": ["assets/img/Belongings/belongings-1.png","assets/img/Belongings/belongings-2.png","assets/img/Belongings/belongings-3.png","assets/img/Belongings/belongings-4.png"],
        "tags": ["Android", "UI Design", "IoT"],
        "source": "https://github.com/JenniferKuo/BeaconSide",
        "description": "An app to handle all your belongings with bluetooth keychain. This app will notify users when they forget to bring their stuff.",
        "video": "https://www.youtube.com/embed/M78b02EF6F4"
    },
    "TradeWise": {
        "title": "TradeWise",
        "year": "2017",
        "gallery": ["assets/img/TradeWise/tradwise1.jpg","assets/img/TradeWise/tradewise2.png","assets/img/TradeWise/tradewise3.png","assets/img/TradeWise/tradewise4.png","assets/img/TradeWise/tradewise5.png"],
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "source": "https://github.com/JenniferKuo/TradeWise",
        "description": "An app to handle all your belongings with bluetooth keychain. This app will notify users when they forget to bring their stuff.",
    },
    "PlantDoctor": {
        "title": "PlantDoctor",
        "year": "2020",
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "source": "https://github.com/JenniferKuo/PlantDoc-Dataset",
        "description": "A mobile app that can diagnose plant disease by taking a photo of leaf. It also connects to an IoT device, including auto watering system, moisture sensor and temperature sensor. All of the service is based on AWS.",
        "video": "https://www.youtube.com/embed/QzcJe_VJ60g"
    },
    "Eunomia": {
        "title": "Eunomia",
        "year": "2020",
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "source": "https://github.com/JenniferKuo/Eunomia",
        "description": "An auto complete online notebook for law, which won the Law Hackthon Prize. Features include law term auto complete, law suggestion, and law auto searching. I handled the frontend part of this work.",
        "video": "https://www.youtube.com/embed/u06tqkifIYQ"
    }, 
    "TakeOutPlz": {
        "title": "TakeOutPlz",
        "year": "2018",
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "gallery": ["assets/img/Belongings/belongings-1.png","assets/img/Belongings/belongings-2.png","assets/img/Belongings/belongings-3.png","assets/img/Belongings/belongings-4.png"],
        "source": "",
        "description": "A start up project for food delivery in my university. Students can order food through this app, and get their food in campus. They can also check public transportation information in this app.",
    }, 
    "FCWT": {
        "title": "Flying Car Wizard Tournament",
        "year": "2019",
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "source": "",
        "description": "The final project for my Game Programming class. It is a CTF game with flying car and different character. I mainly handle the UI part, and the interactive object in this game.",
        "video": "https://www.youtube.com/embed/y43IpoFYlIo"
    },
    "Social": {
        "title": "Social User Study Website",
        "year": "2020",
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "gallery": ["assets/img/Belongings/belongings-1.png","assets/img/Belongings/belongings-2.png","assets/img/Belongings/belongings-3.png","assets/img/Belongings/belongings-4.png"],
        "source": "https://github.com/JenniferKuo/social-user-study",
        "description": "This website was build for a social user study. I use Node.js to handle the server and requests, ejs and bootstrap for the frontend. For recording users' results, I use Google App Script to manipulate spreadsheet.",
    },
    "VR": {
        "title": "VR Navigation User Study",
        "year": "2020",
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "source": "https://github.com/JenniferKuo/VR-Navigation-User-Study",
        "video": "https://www.youtube.com/embed/rQPy05DcxWg",
        "description": "My research project about human spatial knowledge learning by conducting navigation task in virtual city. The virtual environment was built with Unity and SteamVR. I test users with 4 different navigation information, to evaluate their performance in spatial knowledge. The results were published in Ubicomp 2020.",
    },
    "Robot": {
        "title": "Self-driving Car",
        "year": "2020",
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "gallery": ["assets/img/Belongings/belongings-1.png","assets/img/Belongings/belongings-2.png","assets/img/Belongings/belongings-3.png","assets/img/Belongings/belongings-4.png"],
        "source": "",
        "description": "This is the final project of the Robotic Navigation and Exploration class. We use reinforcement learning technique to make the car ride on the road and detect collisions. The project included simulation part and real-world part.",
    }
};



function initElement(name){
    const template = document.querySelector('template');
    const node = document.importNode(template.content, true);
    
    let detail = details[name];
    
    node.getElementById("title").innerHTML = detail.title;
    node.getElementById("year").innerHTML = detail.year;
    node.getElementById("descriptison").innerHTML = detail.description;
    node.getElementById("source").innerHTML = detail.source;

    if(detail.video != undefined){
        let youtube = node.getElementById('youtube');
        youtube.src = detail.video;
    }else{
        // node.getElementById("placeholder").src = detail.gallery[0];
    }
    document.getElementById("portfolio-container").innerHTML = '';
    document.getElementById("portfolio-container").appendChild(node);
    // add image to the gallery
    // detail.gallery.forEach(function(imgSrc){
    //     $('.owl-carousel').owlCarousel('add', '<img src='+imgSrc+' class="img-fluid">').owlCarousel('update');
    // });

}

