<?php
// Parse the expression and do the calculations.
$expression = $_POST['expression'];
use PHPMathParser\Math;
require_once '/var/www/html/lib/PHPMathParser/Math.php';
$math = new Math();
$result = $math->evaluate($expression);
//ob_start();
var_dump($result);
$result = ob_get_clean();
echo $result;
?>
