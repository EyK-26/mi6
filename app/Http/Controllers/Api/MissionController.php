<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendMissionDetails;
use App\Models\Mission;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use App\Mail\TestEmail;
use App\Models\Person;
use App\Models\User;
use App\Notifications\MissionOutcomeUpdated;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

use function Laravel\Prompts\error;

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
    public function send($id): void
    {
        $mission = Mission::findOrFail($id);
        $userEmail = Auth::user()->email;
        Mail::to($userEmail)->send(new SendMissionDetails($mission->load('people')));
    }

    public function update(Request $request, string $id)
    {
        $validate = $request->validate(['name' => 'required', 'year' => 'required']);
        $mission = Mission::findOrFail($id);
        $temp_outcome = $mission->outcome;
        $mission->name = $request->input('name') ?? null;
        $mission->year = $request->input('year') ?? null;
        $mission->outcome = $request->input('outcome') ?? null;
        $mission->save();

        if ($temp_outcome !== $mission->outcome) {
            $users = User::where('admin', 1)->get();
            Notification::send($users, new MissionOutcomeUpdated($temp_outcome, $mission));
        }

        $message = !array_key_exists('message', $validate) ? "updated successfully" : $validate;
        return [
            'message' => $message
        ];
    }

    public function assignPerson(Request $request)
    {
        $missionId = $request->input('missionId');
        $personId = $request->input('personId');

        $mission = Mission::findOrFail($missionId);
        $person = Person::findOrFail($personId);

        $mission->people()->attach($person->id);

        return [
            'message' => "success: $mission->name has been assigned to $person->name"
        ];
    }
    public function unassignPerson(Request $request)
    {
        $missionId = $request->input('missionId');
        $personId = $request->input('personId');

        $mission = Mission::findOrFail($missionId);
        $person = Person::findOrFail($personId);

        $mission->people()->detach($person->id);

        return [
            'message' => "$mission->name has been unassigned from $person->name"
        ];
    }
}
