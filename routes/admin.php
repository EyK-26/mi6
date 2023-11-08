<?php

use App\Http\Controllers\Admin\MissionController;
use Illuminate\Support\Facades\Route;

Route::get("/admin/missions/{mission_id}", [MissionController::class, "edit"])->name("admin.mission");
