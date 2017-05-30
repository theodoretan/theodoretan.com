<?php
    $sudoku = $_GET['sudoku'];

    $request = file_get_contents("http://sudoku-ai.herokuapp.com/solve?sudoku=" . $sudoku);
    exit($request);
?>