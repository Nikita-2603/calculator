function submitForm(event) {
    const target = event.target;
    console.log('form ==> ', event, target);
    const username = target[0].value;
    const password = target[1].value;

    console.log('username: ' + username + ", " + "password: " + password);    
    event.preventDefault();
}

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();