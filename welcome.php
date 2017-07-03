<!DOCTYPE php>
<html>
<head>
<title>Your Calling Card</title>
<meta charset="UTF-8" name="viewport" content="width=1024">
<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
<script src="js/script_welcome.js"></script>
</head>

<body>
<h1>Phantom Thieves of Memes</h1>
<p class="centertext"> Hello <?php if($_POST["name"]==""){echo "Anonymous";}else{echo $_POST["name"];}?></p>
<hr>
<div class="center">
<button id="button" type="button" class="centerize" onclick="Spoiler()">Read</button>
<p id="card" class="centertext"></p>
<a href="home.php"><p id="cardlink" class="link centertext"></p></a>
</div>
</body>
</html>

