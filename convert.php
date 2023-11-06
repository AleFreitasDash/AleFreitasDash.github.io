<?php
  $pdfFile = $_FILES['pdfFile']['tmp_name'];
  $pdf = new Imagick();
  $pdf->readImage($pdfFile);
  $pdf->setImageFormat('jpg');
  header('Content-Type: image/jpeg');
  echo $pdf;
?>