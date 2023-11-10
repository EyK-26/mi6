<?php

use App\Http\Controllers\Admin\MissionController as AdminMissionController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/missions/{mission_id}', [AdminMissionController::class, 'edit'])->whereNumber('mission_id')->name('missions.edit');
