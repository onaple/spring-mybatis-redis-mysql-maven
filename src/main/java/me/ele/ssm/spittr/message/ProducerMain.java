package me.ele.ssm.spittr.message;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import me.ele.ssm.spittr.domain.Spittle;

import java.util.Date;


public class ProducerMain {

  public static void main(String[] args) throws Exception {
    
    ApplicationContext context = new ClassPathXmlApplicationContext("META-INF/spring/amqp-producer.xml");
    AmqpTemplate template = (AmqpTemplate) context.getBean("rabbitTemplate");
    
    for (int i=0; i < 20; i++) {
      System.out.println("Sending message #" + i);
      Spittle spittle = new Spittle((long) i, null, "Hello world (" + i + ")", new Date());
      template.convertAndSend(spittle);
      Thread.sleep(100);
    }
    
    System.out.println("Done!");
    
  }

}
