<!--
 * @Author: your name
 * @Date: 2020-02-04 01:31:08
 * @LastEditTime : 2020-02-04 03:14:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \maple\src\components\NavMenu.vue
 -->
<template>
    <div class="MNavMenu">
        <el-row class="nav"><router-link to="/">Home</router-link></el-row>
        <el-row class="nav"> <router-link to="/about">About</router-link></el-row>
       
        <el-row class="nav"><router-link to="/character">CHARACTER</router-link></el-row>
        <el-row class="nav"><router-link to="/timeline">TIMELINE</router-link></el-row>
        <el-row class="nav">EQUIP</el-row>
        <el-row class="nav"><router-link to="/skill">SKILL</router-link></el-row>
        <el-row class="nav">SETTING</el-row>
        <el-row class="nav">TIMELINE</el-row>
    </div>
</template>

<style>
    .nav {
        font-size: 20px;
        font-stretch: expanded;
        letter-spacing: 1px;
        margin-bottom: 10px;
    }
    .nav > a {
        background-color: transparent;
        text-decoration: none;
        color: #000000;
    }
</style>