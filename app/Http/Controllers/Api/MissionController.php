<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendMissionDetails;
use App\Models\Mission;
use App\Models\User;
use App\Notifications\MissionOutcomeUpdated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;


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
        $validate = $request->validate(['name' => 'required', 'year' => 'required']);
        $mission = Mission::findOrFail($id);
        $mission->name = $request->input('name') ?? null;
        $mission->year = $request->input('year') ?? null;
        $mission->outcome = $request->input('outcome') ?? null;
        $mission->save();

        $message = !array_key_exists('message', $validate) ? "updated successfully" : $validate;
        $admins = User::query()->where('role', 'admin')->get();
        Notification::send($admins, new MissionOutcomeUpdated($mission));


        return [
            'message' => $message
        ];
    }

    public function mail(Request $request, string $id)
    {
        $mission = Mission::findOrFail($id);
        Mail::to('test@test.com')
            ->cc('copy@example.com')
            ->send(new SendMissionDetails($id, $mission));
        return [
            'message' => 'sent'
        ];
    }
}
