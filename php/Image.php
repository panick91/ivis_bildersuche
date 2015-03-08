<?php
/**
 * Created by PhpStorm.
 * User: Patrick
 * Date: 08.03.2015
 * Time: 11:14
 */

class Image implements JsonSerializable{
    private $SIK_INVNR;
    private $KAT_NR;
    private $KUENSTLERIN;
    private $TITEL;
    private $DATIERUNG;
    private $TECHNIK;
    private $MASSE;
    private $STANDORT;
    private $ORT;
    private $STANDORT_URL;
    private $FILENAME;
    private $REPRO_NACHWEIS;
    private $JAHR;
    private $TECHNIKTHESAURUS;
    private $COPYRIGHT;
    private $SIKART_URL;

    public function jsonSerialize(){
        return array(
            'sik_invnr' => $this->SIK_INVNR,
            'titel' => $this->TITEL,
            'jahr' => $this->JAHR
        );
    }
}