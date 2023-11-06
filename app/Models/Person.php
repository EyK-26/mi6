<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Person extends Model
{
    use HasFactory;

    public function aliases(): HasMany
    {
        return $this->hasMany(Alias::class);
    }
    public function image(): BelongsTo
    {
        return $this->belongsTo(Image::class);
    }
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class);
    }
}
