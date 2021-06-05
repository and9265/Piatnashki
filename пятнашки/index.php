<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>Пятнашки</title>
</head>
<body>
    <?php
		for($i=0;$i<16;$i++)
		{
			if($i%4==0 && $i!=0) echo"<br>";
			echo"<button class=\"btn\">{$i}</button>";
		}
	?>
    <script src="script.js"></script>
</body>