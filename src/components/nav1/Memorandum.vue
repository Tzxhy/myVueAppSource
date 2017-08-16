<template>
  <el-row>
    <el-col :span="3" :offset="21">
      <el-button @click="newMemo" type="primary">新建备忘录</el-button>
    </el-col>
    <el-col>
      <el-table :data="table" class="table" :highlight-current-row="true">
        <el-table-column
        align="center"
        label="操作">
          <template scope="scope">
            <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="taskId"
          align="center"
          label="任务编号">
        </el-table-column>
        <el-table-column
          prop="createDate"
          sortable
          align="center"
          label="创建日期">
        </el-table-column>
        <el-table-column
          prop="shouldBeDoneDate"
          sortable
          align="center"
          label="应完成日期">
        </el-table-column>
        <el-table-column
          prop="content"
          align="center"
          label="内容">
        </el-table-column>
        <el-table-column
          prop="place"
          align="center"
          label="地点">
        </el-table-column>
        <el-table-column
          prop="people"
          align="center"
          label="伙伴">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col>
      <el-dialog title="新建备忘录" :visible.sync="newAMemo" >
        <el-form :model="form" label-width="100px" label-position="left" ref="newForm" >
          <el-form-item label="应完成日期" align="left" prop="shouldBeDoneDate">
            <el-date-picker
              v-model="form.shouldBeDoneDate"
              type="datetime"
              format="yyyy-MM-dd HH:mm:ss"
              align="left"
              placeholder="选择完成日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <el-input v-model="form.content" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="地点" prop="place">
            <el-input v-model="form.place" auto-complete="off"></el-input>
          </el-form-item> 
          <el-form-item label="伙伴" prop="people">
            <el-input v-model="form.people" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="newAMemo = false">取 消</el-button>
          <el-button type="primary" @click="saveNewAMemo" :loading="isSaving">确 定</el-button>
        </div>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import {Storage,getUniqueString} from '../../common/storage'
import moment from 'moment'

export default {
  data () {
    return {
      table: [{
        taskId: 'memo_1',
        createDate: '2017-8-16 14:53:10',
        shouldBeDoneDate: '2017-8-17 14:53:10',
        content: '散步',
        place: '西华大学',
        people: '和我媳妇',
      },],
      newAMemo: false,
      isSaving: false,
      form: {
        taskId: '',
        shouldBeDoneDate:'',
        content: '',
        place: '',
        people: ''
      }
    }
  },
  storage: new Storage(),
  methods: {
    handleEdit(index, rowData){

    },
    handleDelete(index, rowData){
      this.$options.storage.removeByKey(rowData.taskId);
      this.table.splice(index, 1);
    },
    newMemo(){
      this.newAMemo = true;
    },
    saveNewAMemo(){
      this.isSaving = true;
      this.form.createDate = moment().format('YYYY-MM-DD, hh:mm:ss');
      this.form.shouldBeDoneDate = moment(this.form.shouldBeDoneDate).format('YYYY-MM-DD, hh:mm:ss');
      this.form.taskId = 'task_' + getUniqueString();
      console.log(this.form);
      /*
        操作localStorage  
       */
      // let storage = new Storage();
      this.$options.storage.setByKey(this.form.taskId, this.form);
      this.table.push(this.form)
      this.newAMemo = false;
      this.isSaving = false;
      console.log(this.form);
      this.$refs['newForm'].resetFields();
    }
  },
  mounted(){
    // let storage = new Storage();
    // console.log(storage);
    this.table = this.$options.storage.getByPrefix('task_');  

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-row {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.el-col {
  margin-top: 10px;
  margin-bottom: 10px;
}
.table thead th {
  text-align: center;
}
</style>
