let details = {
    "FileSharing": {
        "title": "File Sharing System",
        "year": "2023",
        "gallery": ["assets/img/FileSharing/demo.png"],
        "tags": ["Java", "Angular", "Docker", "AWS S3", "MongoDB"],
        "source": "https://github.com/JenniferKuo/file-sharing-app",
        "description": "This demo provide a simple and intuitive platform for users to upload, download, and share files. The system is built using Angular for the frontend, Spring Boot for the backend, and MongoDB as the database. AWS S3 is utilized for storing the actual files, ensuring scalability and reliability. Users can use docker image to easily set up this service on their local machine."
    },
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
        "tags": ["Javascript", "UI Design"],
        "source": "https://github.com/JenniferKuo/TradeWise",
        "description": "An app to handle all your belongings with bluetooth keychain. This app will notify users when they forget to bring their stuff.",
    },
    "PlantDoctor": {
        "title": "PlantDoctor",
        "year": "2020",
        "tags": ["Python", "React Native", "AWS", "IoT"],
        "source": "https://github.com/JenniferKuo/PlantDoc-Dataset",
        "description": "A mobile app that can diagnose plant disease by taking a photo of leaf. It also connects to an IoT device, including auto watering system, moisture sensor and temperature sensor. All of the service is based on AWS.",
        "video": "https://www.youtube.com/embed/QzcJe_VJ60g"
    },
    "Eunomia": {
        "title": "Eunomia",
        "year": "2020",
        "tags": ["Bootstrap", "Javascript"],
        "source": "https://github.com/JenniferKuo/Eunomia",
        "description": "An auto complete online notebook for law, which won the Law Hackthon Prize. Features include law term auto complete, law suggestion, and law auto searching. I handled the frontend part of this work.",
        "video": "https://www.youtube.com/embed/u06tqkifIYQ"
    }, 
    "TakeOutPlz": {
        "title": "TakeOutPlz",
        "year": "2018",
        "tags": ["Ionic", "AngularJS", "UI Design"],
        "gallery": ["assets/img/TakeOutPlz/1.jpg"],
        "source": "",
        "description": "A start up project for food delivery in my university. Students can order food through this app, and get their food in campus. They can also check public transportation information in this app.",
    }, 
    "FCWT": {
        "title": "Flying Car Wizard Tournament",
        "year": "2019",
        "tags": ["Unity", "UI Design"],
        "source": "",
        "description": "The final project for my Game Programming class. It is a CTF game with flying car and different character. I mainly handle the UI part, and the interactive object in this game.",
        "video": "https://www.youtube.com/embed/y43IpoFYlIo"
    },
    "Social": {
        "title": "Social User Study Website",
        "year": "2020",
        "tags": ["Bootstrap","Node.js", "Javascript", "Google Apps Script"],
        "gallery": ["assets/img/SocialUserStudy/admin.JPG"],
        "source": "https://github.com/JenniferKuo/social-user-study",
        "description": "This website was build for a social user study. I use Node.js to handle the server and requests, ejs and bootstrap for the frontend. For recording users' results, I use Google App Script to manipulate spreadsheet.",
    },
    "VR": {
        "title": "VR Navigation User Study",
        "year": "2020",
        "tags": ["Unity", "VR", "HCI"],
        "source": "https://github.com/JenniferKuo/VR-Navigation-User-Study",
        "video": "https://www.youtube.com/embed/rQPy05DcxWg",
        "description": "My research project about human spatial knowledge learning by conducting navigation task in virtual city. The virtual environment was built with Unity and SteamVR. I test users with 4 different navigation information, to evaluate their performance in spatial knowledge. The results were published in Ubicomp 2020.",
    },
    "Robot": {
        "title": "Self-driving Car",
        "year": "2020",
        "tags": ["Computer Vision", "Reinforcement Learning", "Python"],
        "gallery": ["assets/img/Robot/simulator.JPG"],
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
        // let youtube = node.getElementById('youtube');
        let youtube = document.createElement('iframe');
        youtube.src = detail.video;
        node.getElementById('video').appendChild(youtube);
    }else{
        let img = document.createElement('img');
        img.src = detail.gallery[0];
        node.getElementById('video').appendChild(img);
        // node.getElementById("placeholder").src = detail.gallery[0];
    }

    detail.tags.forEach(function(tagName){
        var tag = document.createElement("li");
        tag.className = "tag";
        tag.innerHTML = "#"+tagName;
        node.getElementById("tags").appendChild(tag);
    });

    document.getElementById("portfolio-container").innerHTML = '';
    document.getElementById("portfolio-container").appendChild(node);
    // add image to the gallery
    // detail.gallery.forEach(function(imgSrc){
    //     $('.owl-carousel').owlCarousel('add', '<img src='+imgSrc+' class="img-fluid">').owlCarousel('update');
    // });

}

