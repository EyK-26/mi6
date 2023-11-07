<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function index()
    {
        $query = Mission::all();
        return $query;
    }
    public function show($id)
    {
        $query = Mission::findOrFail($id);
        return $query;
    }

    public function store($id, Request $request)
    {
        $mission = Mission::findOrFail($id);
        $mission->name = $request->post('name');
        $mission->outcome = $request->post('outcome');
        $mission->year = $request->post('year');
        $mission->save();

        return [
            'status' => 'success'
        ];
    }
}
