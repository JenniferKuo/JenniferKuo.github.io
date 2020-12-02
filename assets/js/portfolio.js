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
        "gallery": ["assets/img/TradeWise/tradewise1.png","assets/img/TradeWise/tradewise2.png","assets/img/TradeWise/tradewise3.png","assets/img/TradeWise/tradewise4.png","assets/img/TradeWise/tradewise5.png"],
        "tags": ["Mobile", "AngularJS", "UI Design"],
        "source": "https://github.com/JenniferKuo/TradeWise",
        "description": "An app to handle all your belongings with bluetooth keychain. This app will notify users when they forget to bring their stuff.",
    }
};



function initElement(){
    let detail = details[currentFile];
    console.log(detail);
    $('#title').text(detail.title);
    $('#description').text(detail.description);
    // if(detail.video != undefined){
    //     let youtube = document.getElementById('youtube');
    //     youtube.src = detail.video;
    // }
    template = 'The entire contents of the ejs file';
    var html = ejs.render(template,  { item: resp});
    // detail.gallery.forEach( imgSrc => $('#gallery').append('<img src="'+imgSrc+'" class="img-fluid" alt="">'));
}

$(function(){
    initElement();
});

