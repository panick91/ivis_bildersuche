<?php

/**
 * Created by PhpStorm.
 * User: Patrick
 * Date: 08.03.2015
 * Time: 11:06
 */
class Database
{

    private static $hostname = "149.210.142.41";
    private static $username = "ivis_guest";
    private static $databaseName = "ivis";
    private static $password = "JUPITER-need-FRUIT-problem";


    public static function createDatabaseConnection()
    {
        $db = null;

        try {
            $db = new PDO("mysql:host=" . self::$hostname . ";dbname=" . self::$databaseName
                , self::$username
                , self::$password
                , array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        return $db;
    }
}