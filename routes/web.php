<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/','/Home');
Route::get('/Home',[DashboardController::class,'index'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {



Route::resource('project', ProjectController::class)->except(['show']);

//Route::resource('user',UserController::class);

});
Route::redirect('admin','/project');
Route::get('project/{project:slug}', [ProjectController::class, 'show'])->name('project.show');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
