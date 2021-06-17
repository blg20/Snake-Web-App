## server side function
function submitHighScore(){
    var userName =  document.getElementById("player_name_form").value;

    Ajax.query({

        "type":"submit_highscore",
        "player": userName,
        "score": snake.length

    }).then(function (result) {
        console.log("here is:")
        console.log(result);
        window.scoreboard = result;
        console.log(window.scoreboard)
    });

    for (var i = 0; i < window.scoreboard.length; i++) {
        append_score(result[i])
    }
}



## server.js
import express from "express";
import Handler from "./handler.js";


const port = 8080;
const app = express();

var list_of_scores = [];

app.use("/", express.static("web-app/static"));

app.use("/", express.json());

app.post("/", function (req, res) {

    var request_object = req.body;

    Handler[request_object.type](request_object).then(
        (response_object) => res.json(response_object));


    console.log("Recieved Score from", request_object.player, " : ", request_object.score);
    console.log("Sending requested Scoreboard");

});

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});



## Handler 
const Handler = Object.create(null);

let scoreboard = [];

Handler.submit_highscore = function (request_object) {
    scoreboard.push({
        "player": request_object.player,
        "score": request_object.score
    });
    return Promise.resolve(scoreboard);
};

export default Object.freeze(Handler);




