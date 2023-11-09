<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class MissionOutcomeUpdated extends Notification
{
    use Queueable;

    private $old_outcome;
    private $mission;
    /**
     * Create a new notification instance.
     */
    public function __construct($old_outcome, $mission)
    {
        $this->old_outcome = $old_outcome;
        $this->mission = $mission;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    public function convert($outComeObject)
    {
        return $outComeObject === null || $outComeObject === ""
            ? "unknown"
            : ($outComeObject == 0
                ? "failed"
                : ($outComeObject
                    ? "success"
                    : ""));
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Mission Updated')
            ->greeting('Hello!')
            ->line("Hello {$notifiable->name}")
            ->line("Mission {$this->mission->id} {$this->mission->name} outcome has been updated from {$this->convert($this->old_outcome)} to {$this->convert($this->mission->outcome)}.");
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'old_outcome' => $this->old_outcome,
            'new_outcome' => $this->mission->outcome
        ];
    }
}
