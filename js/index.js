var pointer = 0;

$(document).ready(function() {
 
  
    $("#getQuotes").on("click", function(){
      //$(".message").html("here");
      
      //get Json
      $.getJSON("https://raw.githubusercontent.com/oforchinedu/quotes/master/quotes.json", function(json){
        
        var html = "Quote: " + json[pointer].quote + " " + " " + "Author: " + json[pointer].author;
        
        // check for length and display
        if(pointer < json.length){
          
          $(".message").html(html);
        pointer ++
        }
        else {
          $(".message").html("End of Quotes");
        }
        
        $("#getMessage").on("click", function(){
      
     // $(".message").html("testingffff");
          // create a variable to hold new link
          
      var quotes = 'https://twitter.com/intent/tweet?text=' + html;
           $(".twitter-share-button").attr("href", quotes);
        });
        
      })
      
    })
  
  });