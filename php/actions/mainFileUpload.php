<?php 
	$file = $_FILES['file_back'];
	if(strstr($file['type'], 'image') && !$file['error']){
		session_start();

		for($i = 0, $path = "uploads/main/$i".$file['name']; file_exists('../'.$path); $i++)
			$path = "uploads/main/$i".$file['name'];

		if(move_uploaded_file($file['tmp_name'], '../'.$path)){
			$_SESSION['pathToMainFile'] = '../'.$path;
      		$_SESSION['type'] = $file['type'];

      		$arr = array('path' =>'php/'.$path);
			$arr['name'] = $file['name'];
		}
	}
	echo json_encode($arr);
?>