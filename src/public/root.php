<?php
const APP_PATH = __DIR__ . '/../application/';
require __DIR__ . '/../thinkphp/base.php';
\think\Route::bind('admin');
\think\App::route(false);
\think\Url::root('');
try {
    \think\App::run()->send();
}catch (\Exception $e){
    echo $e->getMessage();
}

