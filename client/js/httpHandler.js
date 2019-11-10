(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  const swimCommandFetcher = function () {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      success: (data) => {
        //console.log(data);
        // reload the page
        SwimTeam.move(data);
      }
    });
  };

  // setInterval(swimCommandFetcher, 3000);

  const ajaxFileUpload = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUpload(file);
  });

})();
