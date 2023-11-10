<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class MissionOutcomeUpdated extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $mission = null;

    public function __construct($mission)
    {
        $this->mission = $mission;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->from('example@example.com', 'Example sender')
            ->subject('Notification Subject')
            ->greeting('Hello ' . $notifiable->name . ',')
            ->line('Mission ' . $this->mission->id . ' ' . $this->mission->name . ' outcome has been updated to ' . $this->mission->outcome . '.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'admin_name' => $notifiable->name,
            'name' => $this->mission['name'],
            'id' => $this->mission['id'],
            'outcome' => $this->mission['outcome']
        ];
    }
}
