function adduser() {
    var p1=document.getElementById("player1").value;
    var p2=document.getElementById("player2").value;
    localStorage.setItem("player1",p1);
    localStorage.setItem("player2",p2);
    window.location="game_page.html";
}
