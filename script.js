var right=document.getElementById('rightdiv').style.height;
var left=document.getElementById('leftdiv').style.height;
if(left>right)
{
	document.getElementById('rightdiv').style.height=left;
}
else
{
	document.getElementById('leftdiv').style.height=right;
}

