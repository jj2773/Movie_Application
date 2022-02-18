var request = new XMLHttpRequest();
    request.open("GET", "./js/data2.json", false);
    request.send(null)
    var data = JSON.parse(request.responseText);
