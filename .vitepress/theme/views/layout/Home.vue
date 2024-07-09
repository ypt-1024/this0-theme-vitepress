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
                <el-row align="middle">

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
                <el-row align="middle">

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

        <!-- 内容区 -->
        <el-main>

            <el-row>
                <!-- 左边文章列表 -->
                <el-col :span="17">

                    <!-- 主要分类 -->
                    <div class="main-category">
                        <el-row align="middle" justify="start">
                            <el-button type="primary">分类</el-button>
                            <el-button color="#fff">
                                <span style="vertical-align: middle">Archlinux </span>
                            </el-button>
                            <el-button color="#fff">
                                <span style="vertical-align: middle">Java </span>
                            </el-button>
                            <el-button color="#fff">
                                <span style="vertical-align: middle">Godot </span>
                            </el-button>
                            <el-button color="#fff">
                                <span style="vertical-align: middle">vitepress </span>
                            </el-button>
                            <el-button color="#fff">
                                <span style="vertical-align: middle">前端 </span>
                            </el-button>
                        </el-row>
                    </div>

                    <!-- 内容区文章列表 -->
                    <div class="main-article-list">

                        <!-- 一排的两篇文章 -->
                        <el-row :gutter="20" class="main-article-row">

                            <!-- 内容区单篇文章 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>

                                <!-- 文章文字部分 -->
                                <div class="article-other">

                                    <!-- 1.文章标题 -->
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                【spring MVC】
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>

                                    <!-- 2.文章摘要 -->
                                    <el-row>
                                        <div class="artivle-abstract">
                                            Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                                            Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                                            模块。
                                        </div>
                                    </el-row>

                                    <!-- 3.文章发表时间 -->
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>

                            <!-- 内容区文章2 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>
                                <div class="article-other">
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                文章2的标题
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>
                                    <el-row>
                                        <div class="artivle-abstract">
                                            这是文章2
                                        </div>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <!-- 一排的两篇文章 -->
                        <el-row :gutter="20" class="main-article-row">

                            <!-- 内容区单篇文章 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>

                                <!-- 文章文字部分 -->
                                <div class="article-other">

                                    <!-- 1.文章标题 -->
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                【spring MVC】
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>

                                    <!-- 2.文章摘要 -->
                                    <el-row>
                                        <div class="artivle-abstract">
                                            Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                                            Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                                            模块。
                                        </div>
                                    </el-row>

                                    <!-- 3.文章发表时间 -->
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>

                            <!-- 内容区文章2 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>
                                <div class="article-other">
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                文章2的标题
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>
                                    <el-row>
                                        <div class="artivle-abstract">
                                            这是文章2
                                        </div>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" class="main-article-row">

                            <!-- 内容区单篇文章 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>

                                <!-- 文章文字部分 -->
                                <div class="article-other">

                                    <!-- 1.文章标题 -->
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                【spring MVC】
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>

                                    <!-- 2.文章摘要 -->
                                    <el-row>
                                        <div class="artivle-abstract">
                                            Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                                            Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                                            模块。
                                        </div>
                                    </el-row>

                                    <!-- 3.文章发表时间 -->
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>

                            <!-- 内容区文章2 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>
                                <div class="article-other">
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                文章2的标题
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>
                                    <el-row>
                                        <div class="artivle-abstract">
                                            这是文章2
                                        </div>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" class="main-article-row">

                            <!-- 内容区单篇文章 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>

                                <!-- 文章文字部分 -->
                                <div class="article-other">

                                    <!-- 1.文章标题 -->
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                【spring MVC】
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>

                                    <!-- 2.文章摘要 -->
                                    <el-row>
                                        <div class="artivle-abstract">
                                            Spring MVC属于SpringFrameWork的后续产品，已经融合在Spring Web
                                            Flow里面。Spring 框架提供了构建 Web 应用程序的全功能 MVC
                                            模块。
                                        </div>
                                    </el-row>

                                    <!-- 3.文章发表时间 -->
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>

                            <!-- 内容区文章2 -->
                            <el-col :span="12" class="main-article-detail">

                                <!-- 文章图片 -->
                                <el-row>
                                    <div class="article-img">
                                        <el-image
                                            :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
                                            style="max-width: 100%; max-height: 100%" />
                                    </div>
                                </el-row>
                                <div class="article-other">
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="20">
                                            <div class="artivle-title">
                                                文章2的标题
                                            </div>
                                        </el-col>
                                        <el-col :span="2"></el-col>
                                    </el-row>
                                    <el-row>
                                        <div class="artivle-abstract">
                                            这是文章2
                                        </div>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="14"></el-col>
                                        <el-col :span="10">
                                            <div class="artivle-publish">
                                                发布于 2023-06-26
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>

                    <!-- 分页 -->
                    <div class="main-page">
                        <el-row>
                            <el-col :span="8">
                            </el-col>
                            <el-col :span="8">
                                <el-pagination layout="prev, pager, next" :total="1000" />
                            </el-col>
                            <el-col :span="8">
                            </el-col>
                        </el-row>
                    </div>
                </el-col>

                <!-- 右边侧边栏 -->
                <el-col :span="7">

                    <!-- 站长信息 -->
                    <div class="author-info">
                        <img src="../../images/avatar.svg" alt="">
                        <el-row>
                            <el-col :span="1">
                            </el-col>
                            <el-col :span="15">
                                <h1>This0</h1>
                                <h3>生活明朗，万物可期</h3>
                            </el-col>

                            <!-- 微信 -->
                            <el-col :span="4">
                                <br><br> <br>
                                <img src="../../images/github.svg" alt="" width="60%">
                            </el-col>

                            <!-- github -->
                            <el-col :span="4">
                                <br><br> <br>
                                <img src="../../images/wx.svg" alt="" width="60%">
                            </el-col>
                        </el-row>
                    </div>

                    <br>

                    <!-- 记录卡片 -->
                    <div class="main-article-record">

                        <!-- 一排的两张卡片 -->
                        <el-row :gutter="0" class="main-article-record-row">

                            <!-- 单张卡片 -->
                            <el-col :span="12">
                                <div class="record-bg">
                                    <div>
                                        <h3>2024.5.6</h3>
                                    </div>
                                    <div>
                                        <h4> 9篇</h4>
                                    </div>
                                    <br>
                                </div>
                            </el-col>

                            <!-- 单张卡片 -->
                            <el-col :span="12">
                                <div class="record-bg">
                                    <div>
                                        <h3>2024.5.6</h3>
                                    </div>
                                    <div>
                                        <h4> 9篇</h4>
                                    </div>
                                    <br>
                                </div>
                            </el-col>
                            <!-- 单张卡片 -->
                            <el-col :span="12">
                                <div class="record-bg">
                                    <div>
                                        <h3>2024.5.6</h3>
                                    </div>
                                    <div>
                                        <h4> 9篇</h4>
                                    </div>
                                    <br>
                                </div>
                            </el-col>

                            <!-- 单张卡片 -->
                            <el-col :span="12">
                                <div class="record-bg">
                                    <div>
                                        <h3>2024.5.6</h3>
                                    </div>
                                    <div>
                                        <h4> 9篇</h4>
                                    </div>
                                    <br>
                                </div>
                            </el-col>
                            <!-- 单张卡片 -->
                            <el-col :span="12">
                                <div class="record-bg">
                                    <div>
                                        <h3>2024.5.6</h3>
                                    </div>
                                    <div>
                                        <h4> 9篇</h4>
                                    </div>
                                    <br>
                                </div>
                            </el-col>
                            <!-- 单张卡片 -->
                            <el-col :span="12">
                                <div class="record-bg">
                                    <div>
                                        <h3>2024.5.6</h3>
                                    </div>
                                    <div>
                                        <h4> 9篇</h4>
                                    </div>
                                    <br>
                                </div>
                            </el-col>
                        </el-row>

                    </div>












                    <!-- 统计 -->
                    <div class="main-article-count">
                        <div class="article-count-bg">
                            <div>
                                <h3>文章总数</h3>
                            </div>
                            <div>
                                <h4> 总篇数100</h4>
                            </div>
                            <br>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
        <el-footer>
        </el-footer>
    </el-container>
</template>

<style scoped>
.el-button--large {
    padding: 0;
}

.el-header {
    --el-header-height: 550px;
    --el-header-padding: 0;
}

.el-main {
    /* height: 1032px; */
    --el-main-padding: 0;

}
</style>