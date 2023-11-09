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
    private $new_outcome;
    /**
     * Create a new notification instance.
     */
    public function __construct($old_outcome, $mission)
    {
        $this->old_outcome = $old_outcome;
        $this->new_outcome = $mission;
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

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Mission Updated')
            ->greeting('Hello!')
            ->line('Hello [Admin Name],')
            ->line('Hello [Admin Name],')
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'old_outcome' => $this->invoice->id,
            'new_outcome' => $this->invoice->amount,
        ];
    }
}
