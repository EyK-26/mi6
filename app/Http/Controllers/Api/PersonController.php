<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->query('status');
        $query = !empty($status) ? Person::query()->where("status_id", $status)->limit(100)->get()
            : Person::query()->limit(100)->get();

        return $query->load('image', 'status');
    }

    public function show($id)
    {
        $person = Person::findOrFail($id);
        return $person->load('image', 'status');
    }
}
