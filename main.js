function addUser(){
    var player_1_name = document.getElementById("player_1_input").value;
    var player_2_name = document.getElementById("player_2_input").value;

    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);

    window.location = "index_2.html";
}
