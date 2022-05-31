 
<template>
    <div id="index">
        <el-container>
            <el-aside width="200px">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                    >
                    <el-sub-menu index="1">
                        <template #title>
                            <!-- <el-icon><location /></el-icon> -->
                            <span>Navigator One</span>
                        </template>
                        <el-sub-menu index="1-4">
                            <span>item four</span>
                        </el-sub-menu>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <strong>Vue管理系统</strong>
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
     </div>
</template>
 
<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:"Index"
    }
</script>
 
<style>
    
    html,body,#app,#index,.el-container{
        height: 100%;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>