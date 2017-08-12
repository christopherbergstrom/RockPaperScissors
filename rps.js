$(document).ready(function()
{
  let playerObj;
  let compObj;
  let compObjArray = ["rock", "paper", "scissors"];
  $(".clickable").click(function()
  {
    playerObj = ($(this).attr("id"));
    $("playerObj").html(playerObj);
    compMove();
  });
  function compMove()
  {
    compObj = compObjArray[(Math.floor(Math.random()*3))];
    // console.log(compObj);
    $("#compObj").html(compObj);
    evaluate();
  }
  function evaluate()
  {
    if (playerObj === "rock" && compObj === "paper")
    {
      addPoint("#compScore");
    }
    else if (playerObj === "rock" && compObj === "scissors")
    {
      addPoint("#playerScore");
    }
    else if (playerObj === "paper" && compObj === "rock")
    {
      addPoint("#playerScore");
    }
    else if (playerObj === "paper" && compObj === "scissors")
    {
      addPoint("#compScore");
    }
    else if (playerObj === "scissors" && compObj === "paper")
    {
      addPoint("#playerScore");
    }
    else if (playerObj === "scissors" && compObj === "rock")
    {
      addPoint("#compScore");
    }
  }
  function addPoint(who)
  {
    $(who).html(parseInt($(who).html())+1);
  }
});
