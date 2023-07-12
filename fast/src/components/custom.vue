<script setup>
import { Ref } from 'vue';
    const a = ref(0)
    const b = ref(0)
    const c = ref(0)
</script>
<template>
     <div class="fast">
        <input type="text"  placeholder="Enter Your Ammount" name="" id="fastinp">
        <input type="text" placeholder="Enter Your Ammount" name="" id="secondinp">
        =
        <p class="result">4</p>
    </div>

    <div class="correction">
        <button class="plus">+</button>
        <button class="minus">-</button>
        <button class="gon">*</button>
        <button class="vag">/</button>
    </div>
</template>
<style>
    button{
    border-radius: 4px !important; 
    border: none;
    box-shadow: 0 0 05px 0 gray;  
    margin: 0 5px !important;
    padding: 2px 10px;
    font-size: 20px !important;
    }
    .fast{
        display: flex;
        gap: 15px;
        margin: 20px 0;
    }

    input{
        padding: 4px 39px 4px 16px;
        border-radius: 6px;
        outline: none;
        border: none;
        box-shadow: 0 0 6px 0 gray;
    }
</style>