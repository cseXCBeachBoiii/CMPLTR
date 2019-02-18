$(document).ready(function () {
  const createdAtTimes = $('.createdAt');
  for (let i = 0; i < createdAtTimes.length; i++) {
    const createdAtObject = JSON.parse(createdAtTimes[i].innerHTML);
    const createdAtMonth = month[createdAtObject.month];
    const createdAtDate = `${createdAtObject.date} ${createdAtMonth} ${createdAtObject.year}`;
    $(".createdAt").eq(i).html(createdAtDate);
    $(".createdAt").eq(i).removeClass("hidden");
  }

  const completionCharts = $('.completionChart');
  for (let i = 0; i < completionCharts.length; i++) {
    const completionData = completionCharts[i].innerHTML;
    const completionDataArray = completionData.split(",");
    const totalDays = completionDataArray.length;
    const completedDays = completionDataArray.filter(function (result) {
      return result === "1";
    }).length;
    const percentComplete = Math.round(completedDays / totalDays * 100);

    $(".completionChart").eq(i).html(`${completedDays}/${totalDays} days`);
    $(".completionChart").eq(i).removeClass("hidden");
    if (percentComplete >= 5) {
      $(".progress-bar").eq(i).html(`${percentComplete}%`);
    }
    $('.progress-bar').eq(i).attr("style", `width:${percentComplete}%`);
  }
});