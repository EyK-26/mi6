<?php

use App\Http\Controllers\Api\MissionController;
use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Api\StatusController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/people', [PersonController::class, 'index'])->name('people.index');
Route::get('/people/{person_id}', [PersonController::class, 'show'])->whereNumber('person_id')->name('people.show');

Route::get('/statuses', [StatusController::class, 'index'])->name('statuses.index');

Route::get('/missions', [MissionController::class, 'index'])->name('missions.index');
Route::get('/missions/{mission_id}', [MissionController::class, 'show'])->whereNumber('mission_id')->name('missions.show');
Route::post('/missions/store', [MissionController::class, 'store'])->name('missions.store');
