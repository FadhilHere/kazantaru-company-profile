<?php

Route::get('/ping', function () {
    return response()->json([
        'message' => 'pong from Laravel',
        'app' => config('app.name'),
        'time' => now()->toDateTimeString(),
    ]);
});
