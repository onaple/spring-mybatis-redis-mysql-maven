package me.ele.ssm.spittr.alerts;

import me.ele.ssm.spittr.domain.Spittle;

public class SpittleAlertHandler {

  /*
  定义消息驱动的AMQP 的pojo
   */
  public void handleSpittleAlert(Spittle spittle) {
    System.out.println(spittle.getMessage());
  }

}
