  $(document).ready(function(){
    var scheduleDetailIconHtml = "<div class='scheduleDetailIcon' id='rightArrow'><img src='images/icon-right-arrow.png'></div>";
    for (var i in routeData){
      var $directionHeader = $("<div class='directionHeader'></div>");
      if (i == "Out of Service"){
        $directionHeader.addClass("outOfService");
      } else if (i == "Reroute"){
        $directionHeader.addClass("reroute");
      }
      $directionHeader.text(i);
      $(".schedulesList").append($directionHeader);
      for (var j in routeData[i]){
        var $scheduleItem = $("<div class='scheduleItem'></div>");
        var busLineHtml = "<div class='busLine'>" + j + "</div>";
        var lineDirectionHtml = "<div class='scheduleContent'><div class='lineDirection'>To " + routeData[i][j]["destination"] + "</div>";
        if (i == "Reroute" || i == "Out of Service"){
          lineDirectionHtml += "<div class='arrivalTimes'>" + routeData[i][j]["frequencyInMins"] + "</div>";
        } else {
          lineDirectionHtml += buildArrivalTimesHtml(routeData[i][j]["frequencyInMins"]);
        }
        lineDirectionHtml += "</div>";
        $scheduleItem.html(busLineHtml + lineDirectionHtml + scheduleDetailIconHtml);
        $(".schedulesList").append($scheduleItem);
      }
    }

    function buildArrivalTimesHtml(frequency){
      var randomCount = Math.floor(Math.random() * 4) + 1;
      var randomMin = 0 - (Math.floor(Math.random() * 4) + 1);
      var arrivalHtml = "<div class='arrivalTimes'>";
      for (var i = 0; i < randomCount; i++){
        var displayMins = randomMin + (frequency * (i + 1));
        arrivalHtml += "<div class='arrival'>" + displayMins + " mins</div>";
      }
      arrivalHtml += "</div>";
      return arrivalHtml;
    }
  });
