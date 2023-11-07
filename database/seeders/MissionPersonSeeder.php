<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MissionPersonSeeder extends Seeder
{

    public function run(): void
    {
        DB::table("mission_person")->truncate();

        while (DB::table("mission_person")->count() < 50) {
            DB::table("mission_person")->insert(['mission_id' => rand(1, 25), 'person_id' => rand(1, 319), 'created_at' => now(), 'updated_at' => now()]);
        }
    }
}
