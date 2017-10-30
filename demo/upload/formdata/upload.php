<?php
  $file = $_FILES;

  $fileTypeArray=array(
    // 'application/vnd.ms-excel',
    // 'text/plain',
    // 'application/msword',
    // 'application/zip',
    // 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    // 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    // 'application/octet-stream',
    'image/*',
);
  echo '{"success":true,"msg":"'.$file.'"}';
?>
