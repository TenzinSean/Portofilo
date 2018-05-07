$(document).ready(function(){

  function getQute(){
    var quotes = ['Peace is within ourself','Compassion is the answer','Think others']
    var authors = ["Dalai lama","Dalai Lama","Dalai Lama"]

    var images = ["https://www.dalailama.com/assets/pages/2015-07-10-NYC-G18-3comitt.jpg", "https://dharmamerchantservices.com/wp-content/uploads/2017/12/download-copy.jpg","http://www.tibetanreview.net/wp-content/uploads/2015/12/Dalai-Lama1.jpg"]

    var randomNumber = Math.floor((Math.random()*quotes.length));
    var randomQuotes = quotes[randomNumber];
    var randomAuthor = authors[randomNumber];
    var randomPic = images[randomNumber];
    $(".quotes").text(randomQuotes);
    $(".authors").text(randomAuthor);
    $(".img1").img(randomPic);
  }

  $(".btn").on("click", function(){
    getQute();
  });
});
