<?php
    $dimenciones = 12;
    if($dimenciones > 0){
        $dibujoX = array();
        for($i=0;$i<$dimenciones;$i++){
            for($j=0;$j<$dimenciones;$j++){
                $x = $i + 1;
                $dibujoX[$i][$j] = "_";
            }
            $ren = $dimenciones-$i-1;
            $dibujoX[$i][$ren] = "X";
            $dibujoX[$i][$i] = "X";
        }

        for($i=0;$i<$dimenciones;$i++){
            for($j=0;$j<$dimenciones;$j++){
                echo $dibujoX[$i][$j];
            }
            echo "<br/>";
        }
    }else{
        echo "El numero no es valido";
    }

?>