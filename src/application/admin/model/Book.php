<?php

namespace app\admin\model;

use app\common\model\Category;

class Book extends \think\Model
{
    public function category(): \think\model\relation\BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}
