function showTime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var hour = date.getHours();
    var minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    $('#date').text(day + "/" + month + "/" + year);
    $('#time').text(hour + ":" + minutes);

    setTimeout(showTime, 1000);
  }
  showTime();