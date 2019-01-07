<template>
  <div>
    <p style="font-size:15px; font-weight:700; color: #fff; padding: 3px 5px; line-height: 40px; background: rgb(63,127,206);height: 40px;">The Details of Order</p>
    <div style="width: 1000px; height: 700px; margin: 0px auto;">
      <img style="float: left; width: 250px; height: 250px; padding-right: 15px" v-bind:src="data.portraitURL"/>
      <div style="float: left; margin:80px auto;margin-left:50px; width: 200px;height:600px">
        <div style="background-image: url(data:image/png;base64,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);
                width: 500px; height: 50px;">
          <p style="float: left; height: 50px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">OrderID:&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{{ data.orderID }}</p>
        </div>
        <div>
          <p style=" color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 20px; height: 50px; width:500px;line-height: 50px">Product name:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{ data.pName }}</p>
        </div>
        <div style="background-image: url(data:image/png;base64,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);
                width: 500px; height: 50px;">
          <p style="float: left; height: 50px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">Unit price:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;¥{{ data.orderPrice }}</p>
        </div>
        <div>
          <p style="float: left; height: 50px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">The Quantity of Purchase:&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;{{  data.amount }}</p>
        </div>
        <div >
          <p style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAggAAADGCAMAAACAX4i8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEhQTFRF7Ovr5+fn8vHx7e3t6ejo8/Ly5uXl7u3t6unp5+bm6urq9PT09fX18fDw9PPz7u7u8fHx8/Pz7ezs5eTk7+7u8O/v9vX16enpNd0tWQAABxVJREFUeNrs3GFy2zgMBWBomWyiNNt0s459/5vW3jZNHNsSJYEAHvh0AP/AfAM+DEjLsOC7e3iL+v21P37f/lH8xV2RFt/hP8Pv77tD7SeJHOyf/9WU8FY6crAEQngHp57wI3ZPCOtgAQQEB/v997fIEuI6qIeA4WD/rNoTlE+HwA6qIYA4OJ0OYXtCZAe1EHAcxE2MoR1UQgByoD5FvnbhoA4CloNjTwh4OgR3UAUBzIH2FKlyOkR3UAMBz0G8KTK8gwoIiA72z99DJcb4DuYhQDoIlhgBHMxCQHWwf75/i9ITEBzMQYB1EGjvAOFgBgKygyiJEcPBNARsB8fEGGCKBHEwCQHcQYibKigOpiDgO/DfO8A4mICQwIF7T8BxcBtCDgf7vefeAcjBTQhZHHjeVEFycAtCGgeOUySUgxsQMjnw2jtgObgOIZUDp8QI5uAqhGwOPPYOaA6uQUjnwOGmCpyDKxAyOrBOjHgOLiHkdGC7dwB0cAEhqQPTxIjo4CuEvA7s9g6QDr5ASOzA7KYKpoNzCLkd2CRGUAdnELI7sNg7oDr4DCG9A4OeAOvgE4QeHLROjLgOPiB04aDxFAns4A+EXhy0fCGL7OAdQjcOGu4doB38htCTg1aJEdvBLwh9OWizdwB38D+Ezhw0SYzoDk4Q+nOwf75XniLhHRwhdOhAfe/wBO/gIH060E2M5W5Ed3CQTh1oJsZyrOMI7uAgnTpQTIwnBwerntDKQVwIzR1o7R3K70oO0A7CQmjvQKknvDsw6QntHESFYOJA44Vs+Sjl3QDsICgEIwfbp8hyVswR10FMCGYOtk6R5w4anw5NHYSEYOhg2wvZclHOEdVBRAiWDjYlxksHDXtCYwcBIRg7WP9Ctlwt6IDpIB4EawerE+N1B416QnMH4SA4OFiXGMutiraQ0N5BNAguDtbsHcpETUdAB8Eg+DhYkRinHKj3BAsHsSC4OVh6U6XMVHWAcxAKgp+DhYlxzoFqT7BxEAmCq4Mle4cyX1a9vYORg0AQnB3Uv5AtVYUdsRzEgeDtoHqKrHOgdDqYOQgDIYCDupsqpbq0A5KDKBAiOKiaIusdKPQEQwdBIARxML93KIuKO+A4iAEhioPZKbIsrO4I4yAEhEAOphPjUgebTgdbBxEghHIwtXcoK+o7gjgIACGWg4nEuMbB6p5g7cAfQjgHt/YOZWWFBwgH7hDiObiRGNc6WNUT7B14Qwjp4FpiLOtLvHzv4ODAGUJQB5eJsWwq8hjfgS+EqA4uesI2BwtPBxcHrhACOzjfO5TNZR6iO/CEENnB2RS53cGCnuDkwBFCcAcf/8xZNOpcmxi9HPhBiO7gzxRZlCo9hnbgBgHAwa/EqOWg6nTwc+AFAcLB6YVsUaz1GNiBEwQMB8fvx6Nired6gqcDHwgwDu5fXlWrPYR14AIBx8FutytPRj3B14EHBCgHRwkHEwnODhwggDnYvaj2hFuJ0duBPQQ0B6ee0D4xujswhwDoYPegKuFaYvR3YA0B0UH7xBjAgTEEUAfaiXGI58AWAqyDpokxhANTCLgOWk6RMRxYQoB2oJ0Yx2AODCFgO2g1RUZxYAcB3sExJ+jvHcI4MIOA70B7ijydDnEcWEFI4UA9MQZyYAQhiYNjYlTtCYEc2EDI4kA7MR46g5DIwe7h9ZEQ6EA/MXYEIZkD5cTYD4R0DrT3Dp1AyOcgaU8QOljsQHvv0AGEnA5STpFCBysc7JTfOySHkNdBwilS6GCVg3SJUehgnQPtvUNaCNkdZEuMQgerv5dMewehgw1fotNB6GCTBEKgg1x7B6GDjT3hkRDoINHeQeiAPaEJhO4cJEmMQgcKEp4IgQ6S9AShAyZGdQi9OsiQGIUOVD74mypCB0yMuhA6d4CeGIUO1E4H6J4gdMDEqAiBDtBfyAodMDGqQaAD/MQodMDEqASBDjL0BKED7cSIOTsIHXCK1IBAB83/mRMCAh1kmSKFDpgYN0OggzwvZIUOmBg3QqCDTHsHoQMmxk0Q6CBXYhQ64N5hAwQ6yNYThA64d1gNgQ7yTZFCB9w7rIRABxmnSKEDJsZVEOggZ2IUOmBiXAGBDrK+kBU6YGJcDIEO8iZGoQPuHRZCoIPMiVHogDdVFkGgg9yJUeiAiXEBBDrInhiFDtgTqiHQQf69g9ABp8hKCHTQw95B6IBTZBUEOugjMQodcIqsgEAHvSRGoQPuHWYh0EE/iVHogIlxBgId9JQYhQ7YEyYh0EFfewehA06RExDowCYnRIdAB91NkUIHTIy3INBBh4lR6ICJ8ToEOujyporQARPjNQh00GliFDrg3uESAh10mxiFDjhFfoVABx33BKEDJsZzCHTQdWIUOmBP+AyBDjpPjEIHTIwfEOig+5sqQgfcO7xDoAMmxhMEOuAUeTj8FGAACqmqUagiyncAAAAASUVORK5CYII=);
                width: 500px; height: 50px;font-size: 15px; font-weight: 700; line-height: 50px;float: left;">The total price:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;¥{{ data.orderPrice*data.amount}}</p>
        </div>
        <div>
          <p style="float: left; height: 50px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">Consumer phone:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;{{ data.username}}</p>
        </div>
        <div>
          <p style="background-image: url(data:image/png;base64,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);
                width: 500px; height: 50px;font-size: 15px; font-weight: 700; line-height: 50px;float: left;">Consumer address:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{data.address}}</p>
        </div>
        <div>
          <p style="float: left; height: 50px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">Purchase date:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;{{data.Date}}</p>
        </div>

        <div style="float: left; height: 320px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
          <div style="float: left; width: 800px;color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">
            <p v-if="data.isFinish === 3" style="float: left; width: 800px; color: rgb(60, 60, 60); font-size: 12px; font-weight: 600; line-height: 50px">Trading status&emsp;:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Unshipped</p>
            <p v-else-if="data.isFinish ===1" style="float: left; width: 800px; color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">Trading status&emsp;:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Sending</p>
            <p v-else-if="data.isFinish ===0" style="float: left; width: 800px; color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">Trading status&emsp;:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Failed</p>
            <p v-else-if="data.isFinish ===2" style="float: left; width: 800px; color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">Trading status&emsp;:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Succeed</p>
          </div>
          <div style="float: left; height: 40px; width:800px;color: rgb(60, 60, 60); font-size: 17px; font-weight: 700; line-height: 50px">
            Choose express&emsp;:
          </div>

          <div style="float: left; height: 40px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/EMS.png" height="20" width="60" />
              </div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="1" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/baishihuitong.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="2" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/quanfeng.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="3" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/shentong.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="4" v-model="params"></label>
              </div>
            </div>

          </div>

          <div style="float: left; height: 40px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/shunfeng.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="5" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/tiantian.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="6" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/youzheng.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="7" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/yuantong.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="8" v-model="params"></label>
              </div>
            </div>
          </div>

          <div style="float: left; height: 40px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/yunda.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="9" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/zhaijisong.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="10" v-model="params"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:80px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/zhongtong.png" height="20" width="60"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="11" v-model="params"></label>
              </div>
            </div>
          </div>

          <div style="float: left; height: 40px; width:800px;color: rgb(60, 60, 60); font-size: 17px; font-weight: 700; line-height: 50px">
            Select site&emsp;:
          </div>
          <div style="float: left; height: 40px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
            <div style="float: left; height: 40px; width:160px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/gaoxin.png" height="20" width="100"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="12" v-model="picked"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:160px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/nanjiao.png" height="20" width="100"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="13" v-model="picked"></label>
              </div>
            </div>

            <div style="float: left; height: 40px; width:160px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
              <div style="float: left; height: 40px; width:120px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <img border="1" src="../common/images/lintong.png" height="20" width="100"/></div>
              <div style="float: left;height: 40px; width:40px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
                <label style="line-height: 50px"><input type="radio" value="14" v-model="picked"></label>
              </div>
            </div>
          </div>
        </div>

        <div style="float: left; height: 100px; width:800px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 400px">
          <div style="float: left; height: 100px; width:200px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
            <button style="margin-left:100px;border:1px;text-align: center;background: #2a56d7;color: white;width:60px;height:30px;" v-on:click="refund(data.orderID)">Refund</button>
          </div>
          <div style="float: left; height: 100px; width:200px;color: rgb(60, 60, 60); font-size: 15px; font-weight: 700; line-height: 50px">
            <button style="margin-left:100px;border: 1px;background: #2a56d7;color: white;width:60px;height:30px;" v-on:click="send(data.orderID)">&nbsp;&nbsp;Send &nbsp;</button>
          </div>
        </div>

      </div>

      <div>
      </div>
    </div>
    <loading v-show="isLoad"/>
  </div>

</template>

<script>/* eslint-disable indent,no-trailing-spaces,quotes,key-spacing */
import Loading from '@/components/common/Loading'

export default {
    components: {Loading},

//    var =new Vue({
//        el: ' #app',
//          data: {
      //     picked: '1',
//  }
// }),

 data () {
   return {
     // el :"#app",
     data: {},
        isLoad: false,
 //     poiRegister: 0,
//      localUrl: '/static/headimg.jpg',
          params: '0',
          picked:'15'
//     order:{}
  }
},
    mounted () {
      this.data = this.$route.params.data
//      this.$emit('childByValue', this.data.sID)
      console.log(this.data)
    },

  methods: {
    refund: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/refund?orderId=' + id)
        .then((data) => {
          this.isLoad = false
          alert('refund Succeed')
        })
      this.status = 'Failed'
      this.initLoad()
    },

    send: function (id) {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/send?orderId=' + id)
        .then((data) => {
          this.isLoad = false
          alert('send Succeed')
        })
      this.status = 'Sending'
      this.initLoad()
    },

    initLoad: function () {
      this.isLoad = true
      this.$http.get(this.URL + 'b/order/all?id=' + this.getCookie('userId'))
        .then((data) => {
          console.log(data)
          this.orders = data.body.data.order
          this.isLoad = false
        })
        .catch(() => {
          this.isLoad = false
        })
    }
  },
  created: function () {
    this.initLoad()
  }
}

</script>

<style scoped>

  *{
    margin: 0px;
    padding: 0px;
    display: block;
  }

</style>
