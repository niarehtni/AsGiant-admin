<template>
  <section>
    <el-card class="box-card">
      <avue-crud :data="data"
                :option="option"
                :page="page"
                @size-change="sizeChange"
                @current-change="currentChange"
                :table-loading="tableLoading"
                @row-save="handleSave"
                @row-update="handleUpdate"
                @refresh-change="handlerefreshChange"
                @row-del="handleDel"></avue-crud>
    </el-card>
  </section>
</template>

<script src='./database.js'></script>
<style src='./database.less'></style>
