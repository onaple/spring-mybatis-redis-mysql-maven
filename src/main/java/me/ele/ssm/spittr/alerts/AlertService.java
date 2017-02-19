package me.ele.ssm.spittr.alerts;

import me.ele.ssm.spittr.domain.Spittle;

public interface AlertService {

  void sendSpittleAlert(Spittle spittle);

}
