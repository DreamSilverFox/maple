<template>
    <div class="MNavMenu">
        <el-row class="nav"><router-link to="/character">CHARACTER 角色</router-link></el-row>
        <el-row class="nav"><router-link to="/attr">Attr 人物属性</router-link></el-row>
        <el-row class="nav"><router-link to="/eqpt">EQUIP 装备</router-link></el-row>
        <el-row class="nav"><router-link to="/skill">SKILL 技能</router-link></el-row>
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