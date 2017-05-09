<?php
	
	$to = 'stupn-mikhail@yandex.ru';
	$subject = 'Marble feedback';
	$name = strip_tags($_POST['name']);
	$email = strip_tags($_POST['email']);
	$msg = strip_tags($_POST['message']);
	$text = "Name: $name \n" .
	"Text: $msg";

	$dbc = mysqli_connect('localhost', 'Nevland', '93152nevland', 'marble');

	$query = "INSERT INTO message_list (name, email, message)
			  VALUES ('$name', '$email', '$msg')";

	mysqli_query($dbc, $query);

	mysqli_close($dbc);

	mail($to, $subject, $text, 'From: ' . $email);

?>