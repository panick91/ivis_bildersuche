<?php
/**
 * Created by PhpStorm.
 * User: Patrick
 * Date: 08.03.2015
 * Time: 11:10
 */

class ImagesDatabase {

    private $db;

    function __construct() {

        try{
            $this->db = Database::createDatabaseConnection();
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }

    function getAllImages(){
        try{
            /*** The SQL SELECT statement ***/
            $stmt = $this->db->prepare('SELECT * FROM raw_data');

            /*** execution ***/
            if($stmt->execute()){
                /*** fetch into class Ingredient ***/
                return $stmt->fetchALL(PDO::FETCH_CLASS, 'Image');
            }
        }
        catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }
}