function loadData(data)
{
	if(data=='btn1')
	{
		document.getElementById('img1').src="./images/iPone Xs1.jpg";
		document.getElementById('para1').innerHTML="Improvements include faster computing speeds, dual-SIM support, filming with stereo audio, and better water resistance. The XS Max was the first plus-sized iPhone to have the reduced bezel form factor, as the iPhone X did not have a larger variant.";
	}
	else if(data=='btn2')
	{
		document.getElementById('img1').src="./images/iPone XsMax.jpg";
		document.getElementById('para1').innerHTML='IPHONE XS Max small description';
	}
	else if(data=='btn3')
	{
		document.getElementById('img1').src="./images/iphone 8s plus.jpg";
		document.getElementById('para1').innerHTML='iphone 8s plus small description';
	}
	else if(data=='btn4')
	{
		document.getElementById('img1').src="./images/iphone SE.jpg";
		document.getElementById('para1').innerHTML='IPHONE SE small description';
	}
	
}

function priceForLoop()
{
	var phones=["Iphone Xs - $1349", "Iphone Xs Max - $200", "Iphone 8s Plus - $300", "Iphone Xs3 - $400"];
	
	for(i=0,len=phones.length,list="Phone avg price <br>";i<len;i++)
	{ 
		list += phones[i]+"<br>";
	}
	document.getElementById('para1').innerHTML=list;
	
}
//function priceForInLoop()
//{
	//var phones =[];
	//phones["Iphone Xs"] = "Rs 1000/=";
	//phones["Apple Iphone XR"] = "Rs 500/=";
	//phones["Iphone 8"] = "Rs 1500/=";
	//phones["Iphone X"] = "Rs 2500/=";
	//phones["Nov 5"] = "Rs 100/=";
	
	//var list="List Of Avarage price(Using for Loop)</br>";
	//for(var item in phone)
	//{
		//list +=item + " : " + phones[item] + "<br />";
		
	//}
	//document.getElementById("image1").src="images/list.jpg";
	//document.getElementById("para").innerHTML =list;
//}


function priceHigher()
{
	var phones = [];
	phones["Iphone Xs"] = 1000;
	phones["Apple Iphone XR"] = 500;
	phones["Iphone 8"] = 1500;
	phones["Iphone X"] = 2500;
	phones["Nov 5"] = 100;
	
	var HighPrice = "List of high cost mobile phone<br />";
	for(var item in phones)
	{
		if(phones[item] > 1000)
		{
			HighPrice += item  + " : " + phones[item] + "<br />";
		}
		
	}
	document.getElementById("img1").src="./images/iphone 8s plus.jpg";
	document.getElementById("para1").innerHTML =HighPrice;
}

function priceLower()
{
	var phones = [];
	phones["Iphone Xs"] = 1000;
	phones["Apple Iphone XR"] = 500;
	phones["Iphone 8"] = 1500;
	phones["Iphone X"] = 2500;
	phones["Nov 5"] = 100;
	
	var LowPrice = "List of low cost mobile phone<br />";
	for(var item in phones)
	{
		if(phones[item] < 1000)
		{
			LowPrice += item  + " : " + phones[item] + "<br />";
		}
		
	}
	document.getElementById("img1").src="./images/iPone XsMax.jpg";
	document.getElementById("para1").innerHTML =LowPrice;
}