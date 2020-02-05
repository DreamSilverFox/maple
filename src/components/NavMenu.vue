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
        <el-row><router-link to="/">Home</router-link></el-row>
        <el-row> <router-link to="/about">About</router-link></el-row>
       
        <el-row><router-link to="/character">CHARACTER</router-link></el-row>
        <el-row>EQUIP</el-row>
        <el-row>SKILL</el-row>
        <el-row>SETTING</el-row>
        <el-row>TIMELINE</el-row>
    </div>
</template>