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
    public function show($mission_id)
    {
        $query = Mission::findOrFail($mission_id);
        return $query;
    }
    public function update(Request $request, $mission_id)
    {
        $request->validate([
            "name" => "required",
            'year' => 'required',
        ]);

        $mission = Mission::with("people")->findOrFail($mission_id);

        if (!$mission) {
            return [
                'message' => 'Mission not found!'
            ];
        }

        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome');
        $mission->save();

        return ['message' => 'Mission updated!'];
    }
}
