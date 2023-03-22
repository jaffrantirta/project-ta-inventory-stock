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
        Schema::create('cashes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('general_journal_id')->unsigned();
            $table->bigInteger('account_id')->unsigned();
            $table->enum('type', ['in', 'out']);
            $table->float('amount');
            $table->string('info')->nullable();
            $table->timestamps();
            $table->foreign('general_journal_id')->references('id')->on('general_journals')->onDelete('cascade');
            $table->foreign('account_id')->references('id')->on('accounts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cashes');
    }
};