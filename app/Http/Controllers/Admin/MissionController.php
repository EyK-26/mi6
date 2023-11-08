<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function edit($mission_id)
    {
        return view("admin.missions.edit");
    }
}
