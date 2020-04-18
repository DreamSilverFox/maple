<template>
    <div class="MNavMenu">
        <el-row class="nav"><router-link to="/character">CHARACTER 角色</router-link></el-row>
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