<?php

ini_set( 'display_errors', 1 );
ini_set( 'display_startup_errors', 1 );
error_reporting( E_ALL );

use PHPMailer\ PHPMailer\ PHPMailer;
use PHPMailer\ PHPMailer\ Exception;

require '../php/PHPMailer/src/Exception.php';
require '../php/PHPMailer/src/PHPMailer.php';
require '../php/PHPMailer/src/SMTP.php';


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer( true );

$noReply = 'no-reply@dustinsmith.tech';
$toMe = 'mail@dustinsmith.tech';

$fromWho = $_POST[ "fullname" ]; //'Dustin';
$message = $_POST[ "message" ];
$ccSender = $_POST[ "email" ];

try {
  //Server settings
  //$mail->SMTPDebug = 2;                      //Enable verbose debug output
  $mail->isSMTP(); //Send using SMTP
  $mail->Host = 'smtp.hostinger.com'; //Set the SMTP server to send through
  $mail->SMTPAuth = true; //Enable SMTP authentication
  $mail->Username = $noReply; //SMTP username
  $mail->Password = 'noReplyDtech090921!'; //SMTP password
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
  $mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

  //Recipients
  $mail->setFrom( $noReply, $fromWho );
  $mail->addAddress( $noReply, 'Dustin' ); //Add a recipient
  //$mail->addAddress('ellen@example.com');  //Name is optional
  //$mail->addReplyTo('info@example.com', 'Information');
  $mail->addCC( $ccSender );
  $mail->addBCC( $toMe );

  //Attachments
  //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
  //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

  //Content
  $mail->isHTML( true ); //Set email format to HTML
  $mail->Subject = 'Message from dustinsmith.tech';
  $mail->Body = $message;
  $mail->AltBody = $message;

  $mail->send();
  echo 'Message has been sent';
} catch ( Exception $e ) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>