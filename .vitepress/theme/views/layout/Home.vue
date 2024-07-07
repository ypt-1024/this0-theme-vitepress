<script setup>
import { useData } from 'vitepress'
// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData()
</script>

<template>

    <!-- 版心 -->
    <el-container class="container">

        <!-- 顶部 -->
        <el-header>

            <!-- 顶部导航条 -->
            <div class="topbar-nav">
                <el-row align="middle" justify="start">

                    <!-- 左侧站点标题 -->
                    <el-col :span="6">
                        <el-button color="#fff" size="large">
                            <el-icon size="large">
                                <House />
                            </el-icon>
                            <span style="vertical-align: middle">{{ site.title }} </span>
                        </el-button>
                    </el-col>

                    <!-- 中间菜单区 -->
                    <el-col :span="12">
                        <el-row justify="center">
                            <el-menu mode="horizontal" :ellipsis="false" text-color="black" active-text-color="green">
                                <el-sub-menu index="1">
                                    <template #title>文章</template>
                                    <el-menu-item index="1-1">item one</el-menu-item>
                                    <el-menu-item index="1-2">item two</el-menu-item>
                                    <el-menu-item index="1-3">item three</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="2">
                                    <template #title>工具</template>
                                    <el-menu-item index="2-1">item one</el-menu-item>
                                    <el-menu-item index="2-2">item two</el-menu-item>
                                    <el-menu-item index="2-3">item three</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="3">
                                    <template #title>站点</template>
                                    <el-menu-item index="3-1">item one</el-menu-item>
                                    <el-menu-item index="3-2">item two</el-menu-item>
                                    <el-menu-item index="3-3">item three</el-menu-item>
                                </el-sub-menu>
                                <el-sub-menu index="4">
                                    <template #title>个人</template>
                                    <el-menu-item index="4-1">item one</el-menu-item>
                                    <el-menu-item index="4-2">item two</el-menu-item>
                                    <el-menu-item index="4-3">item three</el-menu-item>
                                </el-sub-menu>
                            </el-menu>
                        </el-row>
                    </el-col>

                    <!-- 右侧功能区 -->
                    <el-col :span="6">
                        <el-row justify="end">
                            <el-button color="#fff" size="large">
                                <el-icon style="vertical-align: middle" size="large">
                                    <Search />
                                </el-icon>
                            </el-button>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <br>

            <!-- 顶部消息栏 -->
            <div class="topbar-message">
                <el-row align="middle" justify="start">

                    <!-- 左侧即刻 -->
                    <el-col :span="6">
                        <el-button color="#fff" size="large">
                            <span style="vertical-align: middle">即刻 </span>
                        </el-button>
                    </el-col>

                    <!-- 消息内容 -->
                    <el-col :span="12">
                        <el-row justify="center">
                            消息内容轮播
                        </el-row>
                    </el-col>

                    <!-- 右侧展开图标 -->
                    <el-col :span="6">
                        <el-row justify="end">
                            <el-button color="#fff" size="large">
                                <el-icon style="vertical-align: middle" size="large">
                                    <ArrowRight />
                                </el-icon>
                            </el-button>
                        </el-row>
                    </el-col>
                </el-row>
            </div>

            <br>

            <!-- 顶部Banner -->
            <div class="topbar-banner">
                <el-row align="middle" justify="start">

                    <!-- 左侧站点信息 -->
                    <el-col :span="12">
                        <h1>{{ site.title }}</h1>
                        <p>{{ site.description }}</p>
                        <ul>
                            <li><a href="/markdown-examples.html">Markdown Examples</a></li>
                            <li><a href="/api-examples.html">API Examples</a></li>
                        </ul>
                    </el-col>

                    <!-- 右侧banner -->
                    <el-col :span="12">
                        <el-image :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                            fit="scale-down" />
                    </el-col>
                </el-row>
            </div>
        </el-header>
        <!-- <el-main>Main</el-main> -->
        <!-- <el-footer>Footer</el-footer> -->
    </el-container>
</template>

<style scoped></style>