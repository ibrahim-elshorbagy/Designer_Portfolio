<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/','/Home');
Route::get('/Home',[HomeController::class,'index'])->name('dashboard');
Route::get('/gallary',[HomeController::class,'gallary'])->name('gallary');

Route::get('project/{project:slug}', [ProjectController::class, 'show'])->name('project.show');


Route::middleware(['auth', 'verified'])->group(function () {

Route::redirect('admin','/project');
Route::resource('project', ProjectController::class)->except(['show']);

});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
