<?php
  @$file = $_FILES['file'];
  $filename = $file['name'];
  echo @$file;
  echo '{"success":true, "msg":"'.$filename.'"}';
