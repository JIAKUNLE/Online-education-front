import request from '@/utils/request'

export default {
    
    //根据订单编号生成支付二维码
    createNative(orderNo){
        return request({
            url: `/orderservice/paylog/createNative/${orderNo}`,
            method: 'get'
          })
    }



}