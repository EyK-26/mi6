<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mission_person', function (Blueprint $table) {
            $table->foreignId('mission_id');
            $table->foreignId('person_id');
            $table->timestamps();
            $table->unique(['mission_id', 'person_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mission_person');
    }
};
