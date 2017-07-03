<!DOCTYPE php>
<html>
<head>
<title>Your Calling Card</title>
<meta charset="UTF-8" name="viewport" content="width=1024">
<link rel="stylesheet" type="text/css" href="css/style_welcome_php.css">
<script src="js/script_welcome_php.js"></script>
</head>

<body>
<style>

</style>
<h1>Phantom Thieves of Memes</h1>
<p> Sir <?php echo $_POST["name"]; ?></p>
<hr>
<div class="center">
<button id="button" type="button" class="centerize" onclick="Spoiler()">Read</button>
<p id="card"></p>
</div>
</body>
</html>

