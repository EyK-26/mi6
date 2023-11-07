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
        return $query->load('people');
    }
    public function show($id)
    {
        $query = Mission::findOrFail($id);
        return $query->load('people');
    }

    public function update(Request $request, string $id)
    {
        $validate = $request->validate(['name' => 'required', 'year' => 'required', 'outcome' => 'required']);
        $mission = Mission::findOrFail($id);
        $mission->name = $request->input('name') ?? null;
        $mission->year = $request->input('year') ?? null;
        $mission->outcome = $request->input('outcome') ?? null;
        $mission->save();

        return [
            'status' => 'success',
            'error' => $validate ?? null
        ];
    }
}
