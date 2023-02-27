$(document).ready(function () {

    var now = dayjs();
    var formattedDateTime = now.format("dddd, MMMM D, YYYY h:mm A");
    $("#currentDay").text(formattedDateTime)


    $('.time-block').each(function () {
        var hour = ($(this).attr('id'));

        if (hour < now.hour()) {
            $(this).addClass("past").removeClass("present future");
        } else if (hour == now.hour()) {
            $(this).addClass("present").removeClass("past future");
        } else {
            $(this).addClass("future").removeClass("past present");
        }
        console.log(hour)
    });

    $(".saveBtn").on("click", function () {
        var timeBlockId = $(this).parent().attr("id");

        var text = $(this).siblings(".discription").val().trim();

        localStorage.setItem(timeBlockId, text);
    });

    $('.time-block').each(function () {
        var id = $(this).attr('id');

        var value = localStorage.getItem(id);

        if (value !== null) {
            $(this).find('textarea').val(value);
        }

    });

});