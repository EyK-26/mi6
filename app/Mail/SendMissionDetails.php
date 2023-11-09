<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SendMissionDetails extends Mailable
{
    use Queueable, SerializesModels;

    public $mission;
    /**
     * Create a new message instance.
     */
    public function __construct($mission)
    {
        $this->mission = $mission;
    }

    public function build()
    {
        return $this->view("emails.mission");
    }
}
