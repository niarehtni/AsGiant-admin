<template>
  <section>
    <el-card class="box-card">
      <avue-crud :data="data"
                 :option="option"
                 :page="page"
                 @size-change="sizeChange"
                 :table-loading="tableLoading"
                 @current-change="currentChange"
                 @row-save="handleSave"
                 @row-update="handleUpdate"
                 @row-del="handleDel"></avue-crud>
    </el-card>
  </section>
</template>

<script src='./index.js'></script>
<style src='./index.less'></style>
