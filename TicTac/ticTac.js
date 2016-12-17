var char="X";
function createBoard(){
	var i,j;
	for(i=1;i<4;i++)
	{
		for(j=1;j<4;j++)
		{
			document.getElementById(''+i+j).addEventListener('click',fillSquare);
		}
	}
}
function fillSquare()
{
	document.getElementById(this.id).innerHTML=char;
	document.getElementById(this.id).removeEventListener('click',fillSquare);
	if(checkWinner(this.id))
	{
		if(char=="X")
			alert("Player 1 wins");
		else
			alert("Player 2 wins");
	}
	else
		toggleXO();
}
function toggleXO()
{
	if(char=="X")
		char="O";
	else
		char="X"
}
function checkWinner(id)
{
	var matchr=0,matchc=0,matchd1=0,matchd2=0;
	var row=Math.floor(parseInt(id)/10);
	column=parseInt(id)%10;
	for(var j=1;j<4;j++)
	{
		if(document.getElementById(''+row+j).innerHTML===document.getElementById(''+row+column).innerHTML)
			matchr++;
		if(document.getElementById(''+j+column).innerHTML===document.getElementById(''+row+column).innerHTML)
			matchc++;
	}
	if(matchr==3||matchc==3)
		return 1;
	else if(row==column)
	{
		for(var i=1;i<4;i++)
		{
			if(document.getElementById(''+row+column).innerHTML==document.getElementById(''+i+i).innerHTML)
				matchd1++;
		}
		if(matchd1==3)
			return 1;
	}
	else if(row+column==4)
	{
		for(var i=1;i<4;i++)
		{
			for(var j=1;j<4;j++)
				if(i+j==4 && document.getElementById(''+row+column).innerHTML==document.getElementById(''+i+j).innerHTML)
					matchd2++;

		}
		if(matchd2==3)
			return 1
	}
	return 0;

}
