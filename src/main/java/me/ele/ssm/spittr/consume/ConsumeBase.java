package me.ele.ssm.spittr.consume;

import com.rabbitmq.client.Channel;
import me.ele.ssm.controller.RestaurantController;
import me.ele.ssm.spittr.common.JacksonParse;
import me.ele.ssm.spittr.domain.Spittle;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.core.ChannelAwareMessageListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by onaple on 2017/2/19.
 */
public class ConsumeBase implements ChannelAwareMessageListener {


    @Autowired
    private RestaurantController restaurantController;

    //默认的nack后重试次数
    public final static int defaultRetryTimes = 3;

    /**
     * 网络抖动或业务异常造成的nack重试次数
     */
    public int retryTimes = 0;

    private Log logger = LogFactory.getLog(this.getClass());

    @Override
    public void onMessage(Message message, Channel channel) throws Exception {
        logger.debug("message : " + message);

        System.out.println(message);
        try {
            System.out.println("before dobiz....");

            logger.debug("message send chrome: " + message);
            System.out.println("after dobiz....");

            retryTimes = 0;

        } catch (Exception e) {

            System.out.println(e);
            e.printStackTrace();

            retryTimes++;
            //不停的业务实现自己的延时重发策略
            boolean nack = retryStrategy(retryTimes);
            if (nack) {
                logger.info("消息业务异常,nack重试 : message : " + message);
                channel.basicNack(message.getMessageProperties().getDeliveryTag(), false, true);
                //业务异常直接回复nack并return
                return;
            } else {
                logger.warn("重试策略生效,丢弃消息 : message : " + message);
            }

        }
        //正常的ack应答
        channel.basicAck(message.getMessageProperties().getDeliveryTag(), true);
    }


    /**
     * 消息未成功消费后,重试策略  默认策略,不同的业务需要可重写该部分策略
     */
    protected boolean retryStrategy(int retryimes) {
        boolean needNACK = true;
        if (retryimes > defaultRetryTimes) {
            //超过重试次数丢弃消息
            needNACK = false;
        }

        //幂等的增加延时
        try {
            Thread.currentThread().sleep(retryimes * 200);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return needNACK;
    }

}

