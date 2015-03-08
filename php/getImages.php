<?php
/**
 * Created by PhpStorm.
 * User: Patrick
 * Date: 01.04.14
 * Time: 18:09
 */

require_once 'Database.php';
require_once 'Image.php';
require_once 'ImagesDatabase.php';

$imageDB = new ImagesDatabase();

/*** get advices ***/
$result = $imageDB->getAllImages();

/*** create JSON and return to caller ***/
$json = json_encode($result);

header('Content-type: application/json');
echo $json;


?>