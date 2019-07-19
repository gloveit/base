<template>
  <div class="demo">
    <button @click="printPdf" >Lodop插件打印</button>
    <button v-preventReClick="3000">防抖插件引用</button>
    <cb :bt="cb"/>
  </div>
</template>

<script>

import {getLodop} from './lodop.js'

  export default {
    name: "lodop",
    data() {
      return {
        cb:"处理按钮"
      }
    },
    methods: {
      // 查询数据
      printPdf() {
        let  LODOP = getLodop();
        // LODOP.PRINT_INIT("订货单");
        // LODOP.SET_PRINT_STYLE("FontSize", 18);
        // LODOP.SET_PRINT_STYLE("Bold", 1);
        // LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "打印页面部分内容");
        // LODOP.ADD_PRINT_HTM(88, 200, 350, 600,
        //   document.getElementById("form1").innerHTML);
        // LODOP.PREVIEW();

        LODOP.PRINT_INITA(0,-6,800,600,"电子发票");
        LODOP.SET_PRINT_MODE("PROGRAM_CONTENT_BYVAR",true);
        LODOP.ADD_PRINT_RECT(19,164,431,571,0,1);
        LODOP.ADD_PRINT_TEXT(20,163,58,20,"");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",8);
        LODOP.ADD_PRINT_TEXT(82,193,85,26,"客户名称:");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(81,280,90,26,'data.custName');
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(114,194,53,26,"地址:");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(113,260,298,27,'data.address');
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        // if(data.realAmt){
            LODOP.ADD_PRINT_TEXT(158,194,90,26,"气费:");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
            LODOP.ADD_PRINT_TEXT(157,302,264,26,"10元");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        // }
        LODOP.ADD_PRINT_TEXT(320,192,83,26,"发票代码:");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(320,283,141,26,'data.invoiceCode');
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(356,191,83,26,"发票号：");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(431,282,101,26,'2019-07-09');
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(431,188,88,26,"开票日期:");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_BARCODE(337,460,60,60,"QRCode",'data.wechatUrl');
        LODOP.SET_PRINT_STYLEA(0,"Stretch",1);
        LODOP.ADD_PRINT_TEXT(36,316,269,26,"金卡缴费收据");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
        LODOP.ADD_PRINT_TEXT(81,388,55,26,"日期:");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(82,447,112,26,'2019-07-09');
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(248,190,346,26,"以上信息已开具增值税电子发票，如有需要请扫描");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_LINE(235,187,236,558,2,1);
        LODOP.ADD_PRINT_LINE(148,196,149,559,2,1);
        LODOP.ADD_PRINT_TEXT(279,189,347,26,"下方二维码，自行下载打印");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(356,282,100,26,'金额');
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(390,190,84,26,"开票金额：");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        LODOP.ADD_PRINT_TEXT(389,283,100,26,"10元");
        LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        // if(data.otherCostAmt){
            LODOP.ADD_PRINT_TEXT(195,194,96,26,"其他费用：");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
            LODOP.ADD_PRINT_TEXT(195,302,266,26,"10元");
            LODOP.SET_PRINT_STYLEA(0,"FontSize",11);
        // }
        // return lodop;
        //直接打印
        // LODOP.PREVIEW(); 
        //预览贡呢
        LODOP.PRINT_SETUP();
      },
    }
  }
</script>