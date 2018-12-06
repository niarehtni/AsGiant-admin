<template>
  <section>
    <el-card class="box-card tableField">
      <h4 class="title">{{columnName}}</h4>
       <avue-crud :data="data"
                  :option="option"
                  :table-loading="tableLoading"
                  @row-save="handleSave"
                  @row-update="handleUpdate"
                  @refresh-change="handlerefreshChange"
                  @row-del="handleDel"
                >
      </avue-crud>
    </el-card>
  </section>
</template>

<script src='./tableField.js'></script>
<style src='./tableField.less'></style>
