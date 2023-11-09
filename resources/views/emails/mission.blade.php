<div>
    <h1>name: {{ $mission->name }}</h1>

    <ul>
        @foreach ($mission->people as $people)
        <li>name {{ $people->name }} status {{ $people->status_text }}</li>
        @endforeach
    </ul>
</div>