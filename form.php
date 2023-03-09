<?php
$name = $_POST['name'];
$phone = $_POST['phone_number'];
$token = "5796995729:AAFkZ88EgsChusMk3ifnyrfpKDqS2v9FQZc";
$chat_id = "-803996725";
$arr = array(
  "Ім'я: " => $name,
  "Телефон: " => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.php');
} else {
  echo "Error";
}
?>