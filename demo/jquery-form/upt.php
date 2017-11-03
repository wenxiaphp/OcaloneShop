<?php
  if (!isset($_FILES['file'])||empty($_FILES['file'])) {
    echo '{"success":false,"msg":"没有选择文件！"}';
    return false;
  }
  if (!isset($_POST['dir'])||empty($_POST['dir'])) {
    echo '{"success":false,"msg":"没有选择文件夹！"}';
    return false;
  }

  $file=$_FILES['file']; // 获取上传文件的全部信息
  $filename=$file['name']; // 上传文件的名称
  $type=$file['type']; // 上传文件的MIME类型
  $tmp_name=$file['tmp_name']; // 上传到服务器上的临时文件名
  $size=$file['size']; // 上传文件的大小
  $error=$file['error']; // 上传文件的错误号
  $maxSize=8388608;//文件大小限制8M(1M=1024*1024*Byte)
  $allowExt=['jpeg','jpg','png','gif'];//文件扩展名限制

  $_dir = $_POST['dir'];

  //检查是否有选择文件
  if ($error===0){ //UPLOAD_ERR_OK
    //上传限制
    if ($size>$maxSize) {
      echo '{"success":false,"msg":"上传文件大小超过设定值"}';
      return false;
    }

    // 检测扩展名
    $ext=pathinfo($filename,PATHINFO_EXTENSION);
    if (!in_array($ext,$allowExt)) {
      echo '{"success":false,"msg":"文件错误或损坏无法读取！"}';
      return false;
    }

    //检查是否通过HTTP POST方式上传
    if (!is_uploaded_file($tmp_name)) {
      echo '{"success":false,"msg":"上传错误！请使用HTTP POST方式上传文件。"}';
      return false;
    }

    //输出提示
    if (move_uploaded_file($tmp_name, $_dir."/".$filename)) {
      echo '{"success":true,"msg":"文件：“'.$filename.'”上传成功！'.$type.'-扩展名：-'.pathinfo($filename,PATHINFO_EXTENSION).'"}';
    }else{
      echo '{"success":false,"msg":"文件：'.$filename.'上传失败"}';
    }
  }else{
    //输出错误信息
    switch ($error){
      case 1:
        echo '文件上传失败，文件超过服务器设定大小！解决方法:更改PHP.ini设置中的dpload_max_filesize';
        break;
      case 2:
        echo '文件上传失败，文件超过服务器表设定！解决方法：更改PHP.ini设置中的MAX_FILE_SIZE';
        break;
      case 3:
        echo '文件部分上传失败，请再试一次！';
        break;
      case 4:
        echo '没有选择文件！';
        break;
      case 6:
        echo '没有找到上传目录！';
        break;
      case 7:
      case 8:
        echo '系统错误！';
        break;
    }
  }
?>
