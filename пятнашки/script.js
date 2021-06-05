const buttons=document.getElementsByClassName("btn");



let numbers=new Array();
for(let i=0;i<16;i++)
	numbers[i]=i;

for(let i=0;i<16;i++)
	{
		let x=Math.round(Math.random()*15);
		let temp=numbers[i];
		numbers[i]=numbers[x];
		numbers[x]=temp;
	}
for(let i=0;i<16;i++)
	buttons[i].innerHTML=numbers[i];

function swap(x,y)
{
	let temp=buttons[x].innerHTML;
	buttons[x].innerHTML=buttons[y].innerHTML;
	buttons[y].innerHTML=temp;
}

function win()
{
	let win=0;
	for(let i=0;i<16;i++)
		{
			if(buttons[i]==i+1) win++;
		}
	if(win==16) alert("вы победили");
}

function onBtnClick(e)
{
	let clickedText=e.srcElement.innerHTML;
	for(let i=0;i<16;i++)
		if(clickedText==buttons[i].innerHTML)
			{
				
				if(i%4!=0&&buttons[i-1].innerHTML=="0")
					{ 
				   		swap(i,i-1);return;
					}
				if(i%4!=3&&buttons[i+1].innerHTML=="0")
				   { 
				   		swap(i,i+1);return;
					}
				if(i>3&&buttons[i-4].innerHTML=="0")
				   { 
				   		swap(i,i-4);return;
					}
				if(i<12&&buttons[i+4].innerHTML=="0")
				   { 
				   		swap(i,i+4);return;
					}
			}
}

for(let i=0;i<buttons.length;i++)
{
		buttons[i].onclick=onBtnClick;	
}


