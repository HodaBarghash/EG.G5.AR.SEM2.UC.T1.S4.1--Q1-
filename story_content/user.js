function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lBkAQ47Q6g":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzqtIKaVYlHjH83oa1GRjSPecaWnGEsjnDv0iYNov6nXRyCVz1l6foP0b_r5RmL74xh/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

