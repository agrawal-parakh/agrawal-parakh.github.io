
function playgame(input) {
    var a = input.slice(0, 3);
    var b = input.slice(3, 6);
    var c = input.slice(-3);
    console.log(a);
    console.log(b);
    console.log(c);
    // if (((a[0] != " ") && a[1] == a[2]) || ((a[0] != "") && b[0] == c[0]) || ((a[0] != "") && b[1] == c[2]) || (b[0]!=" ") && b[1]==b[2] || (c[0]!=" ") && c[1]==c[2] || ((a[1] != " ") && b[1] == c[1]) || ((a[2] != " ") && b[2] == c[2]) || ((a[2] != " ") && b[1] == c[0]) ){
    //     console.log("x wins");
    // }
}
playgame(["x", "x", "x", 0, 0, " ", " ", " ", " "]);

// playgame(["x","",0,"x",0,"","x","",""])
// playgame(["x", 0, "", "", "x", "", 0, "", "x"]);
// playgame(["",0,0,"x","x","x","","",""]);
// playgame([" ",0,0,0," "," ","x","x","x"]);
// playgame([0,"x","",0,"x","","","x",""])
// playgame(["",0,"x","",0,"x",0,"","x"])
// playgame([0,"","x",0,"x","","x","",""])


