<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $query = Person::query()->with('status')->limit(50)->get();
        return $query->load('image');
    }
}
