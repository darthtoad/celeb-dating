$(document).ready(function(){
    $("form#quiz").submit(function(event){
      event.preventDefault();
      if (orientation === "both") {
        var random = Math.random();
        if (random <= .5) {
          orientation = "men";
        } else {
          orientation = "women";
        }
      };
      var orientation = $("input:radio[name=1]:checked").val();
      var weird = $("input:radio[name=2]:checked").val();
      var age = $("input:radio[name=3]:checked").val();
      if (orientation === "men" && weird === "no" && age === "20") {
        $(".hemsworth").show();
      } else if (orientation === "women" && weird === "no" && age === "20") {
        $(".lawrence").show();
      } else if (orientation === "men" && weird === "yes" && age === "20") {
        $(".day").show();
      } else if (orientation === "women" && weird === "yes" && age === "20") {
        $(".olsen").show();
      } else if (orientation === "men" && weird === "no" && age === "50") {
        $(".pitt").show();
      } else if (orientation === "women" && weird === "no" && age === "50") {
        $(".moore").show();
      } else if (orientation === "men" && weird === "yes" && age === "50") {
        $(".buscemi").show();
      } else if (orientation === "women" && weird === "yes" && age === "50") {
        $(".barr").show();
      } else if (orientation === "men" && weird === "no" && age === "70") {
        $(".walken").show();
      } else if (orientation === "woman" && weird === "no" && age === "70") {
        $(".dench").show();
      } else if (orientation === "men" && weird === "yes" && age === "70") {
        $(".brooks").show();
      } else if (orientation === "women" && weird === "yes" && age === "70") {
        $(".white").show();
      } else if (orientation === "men" && weird === "no" && age === "dead") {
        $(".bogart").show();
      } else if (orientation === "women" && weird === "no" && age === "dead") {
        $(".hepburn").show();
      } else if (orientation === "men" && weird === "yes" && age === "dead") {
        $(".kauffman").show();
      } else {
        $(".west").show();
      }
    })
})
