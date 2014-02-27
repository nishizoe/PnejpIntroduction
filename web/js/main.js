$(document).ready(function(){
  $.getJSON("./data/data.json" , function(data) {
    var communityNames = data['community_name'];
    var randnumName = 0 + Math.floor(Math.random() * communityNames.length);
    $('#community_name_example').text(communityNames[randnumName]['example']);
    $('#community_name_comment').text(communityNames[randnumName]['comment']);

    var communityGoals = data['community_goal'];
    var randnumGoal = 0 + Math.floor(Math.random() * communityGoals.length);
    $('#community_goal_example').text(communityGoals[randnumGoal]['example']);
    $('#community_goal_comment').text(communityGoals[randnumGoal]['comment']);

    var communityActivities = data['community_activity'];
    var randnumActivity = 0 + Math.floor(Math.random() * communityActivities.length);
    $('#community_activity_example').text(communityActivities[randnumActivity]['example']);
    $('#community_activity_comment').text(communityActivities[randnumActivity]['comment']);

    var communityEvents = data['community_event'];
    var randnumEvent = 0 + Math.floor(Math.random() * communityEvents.length);
    $('#community_event_example').text(communityEvents[randnumEvent]['example']);
    $('#community_event_comment').text(communityEvents[randnumEvent]['comment']);

    var communityFees = data['community_fee'];
    var randnumFee = 0 + Math.floor(Math.random() * communityFees.length);
    $('#community_fee_example').text(communityFees[randnumFee]['example']);
    $('#community_fee_comment').text(communityFees[randnumFee]['comment']);
  });

  $("#community_name").blur(function(){
    $('#community_name_2').text($("#community_name").val());
    $('#community_name_3').text($("#community_name").val());
    $('#community_name_4').text($("#community_name").val());
  });

  $("#community_goal").blur(function(){
    $('#community_goal_1').text($("#community_goal").val());
  });

  $("#community_activiy_input_1").blur(function(){
    $('#community_activiy_1').text($("#community_activiy_input_1").val());
  });

  $("#community_activiy_input_2").blur(function(){
    $('#community_activiy_2').text($("#community_activiy_input_2").val());
  });

  $("#community_activiy_input_3").blur(function(){
    $('#community_activiy_3').text($("#community_activiy_input_3").val());
  });

  $("#community_event_input_1").blur(function(){
    $('#community_event_1').text($("#community_event_input_1").val());
  });

  $("#community_event_input_2").blur(function(){
    $('#community_event_2').text($("#community_event_input_2").val());
  });

  $("#community_event_input_3").blur(function(){
    $('#community_event_3').text($("#community_event_input_3").val());
  });

  $("#community_fee").blur(function(){
    $('#community_fee_1').text($("#community_fee").val());
  });
});