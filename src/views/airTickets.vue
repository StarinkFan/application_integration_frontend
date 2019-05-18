<template>
    <div id="main">
        <h1>三大平台机票价格对比</h1>
        <h2>5.20，上海->北京</h2>
        <el-table
                :data="tickets"
                border
                stripe
                style="max-width: 90%">
            <el-table-column
                    prop="flightNumber"
                    label="航班号">
            </el-table-column>
            <el-table-column
                    prop="company"
                    label="航班公司"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="departureAirport"
                    label="起飞机场"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="departureTime"
                    label="起飞时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="arrivalAirport"
                    label="到达机场"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="arrivalTime"
                    label="到达时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="qPrice"
                    label="去哪儿票价"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="tPrice"
                    label="途牛票价"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="xPrice"
                    label="携程票价"
                    width="120">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "airTickets",
        data(){
            return{
                tickets: [
                    {date: "121", name:"234", address:"1212"},
                    {date: "121", name:"234", address:"1212"}
                ]
            }
        },
        mounted(){
            this.$get("/getAirTickets").then((res)=>{
                console.log(res);
            })
        }
    }
</script>

<style scoped>
#main{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

h1{
    color: lightskyblue;
    display: block;
    width: 100%;
}

h2{
    color: lightgray;
    display: block;
    width: 100%;
    margin-top: 0;
}
</style>