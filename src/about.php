<!DOCTYPE html>
<html>

<head>
	<!--(a)-->
	<title> My Shopping Cart </title>
	<link rel="stylesheet" href="styles/styles.css"> 
	
	
</head>

<body>
	<img src="images/cart2.jpg" width="200px" alt="shoppig cart image" title="shoppig cart image" class="logo" id="top">
	
	<!--(c)-->
	<h1>Shopping Cart</h1>
	<h3 id="header">The online shopping store</h3>
	
	<!--(d)-->
	<hr id="line">
	
	<!--(e)-->
	<ul class="menu">
		<li class="menu"><a href="#">Home </a></li>
		<li class="menu"><a href="news.html">News</a></li>
		<li class="menu"><a href="register.html">Contact</a></li>
		<li class="menu"><a href="about.php">About</a></li>
	
	</ul>
	
<center>
<?php
  define("companyName","S");
		echo "<h2>ABOUT ".companyName."</h2><br>";
 
		echo "<h4>this page is mainly about the ".companyName."
			website</h4><br>";
 
	$sold=75;
	$total=100;
 
	echo"the shopping cart<br>";
	echo "number of sold items :".$sold."<br>";
	echo"number of total items:".$total."<br>";
 
	function findPercentage(){
		$GLOBALS['percentage']=($GLOBALS['sold']/$GLOBALS['total'])*100;
	}
	
	findPercentage();
	
	echo "<h3>percentage of sold items: ".$percentage."%</h3><br>";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
?>
</center>

	<center>
	<footer> 
		<h3 style="font-weight:bold; font-style:italic;">Created by C.S.E.</p>
		<a href="">Visit to Our Course</a>
	
	</footer>
	</center>
	
<p href="#top"> Click to go back to top </p>
	
</body>
</html>


