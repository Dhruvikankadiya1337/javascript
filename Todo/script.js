
$(document).ready(function () {
  $('#button').click(function () {
      var toAdd = $('input[name=ListItem]').val().trim();

      if (toAdd !== listItem) {
          var currentDateTime = new Date().toLocaleString();

          var listItem = '<li>' +
              '<input type="radio" class="task-radio"> ' +  '<span class="task-text">' + toAdd + '</span>' +
              ' <span class="task-time">(' + currentDateTime + ')</span>' +
            '</li>';

          $('ol').prepend(listItem);
          $('input[name=ListItem]').val('');
      }
  });

  $("input[name=ListItem]").keyup(function (event) {
      if (event.keyCode == 13) {
          $("#button").click();
      }
  });

  $(document).on('change', '.task-radio', function () {
      $(this).siblings('.task-text').toggleClass('strike');
  });

  $('input[name=ListItem]').focus(function () {
      $(this).val('');
  });
});
