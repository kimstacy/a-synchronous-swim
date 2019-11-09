(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  const getSwimCommand = function () {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: true,
      success: (direction) => {
        SwimTeam.move(direction);
        // reload the page
        // window.location = window.location.href;
      }
    });
  };

  let randomCommand = function() {
    var array = ['left', 'right', 'up', 'down'];
    var index = Math.floor(Math.random() * 3);
    var commandStr = array[index];
   console.log(commandStr);
    return commandStr;
  }

  let swimTeamMove = function() {
    var direction = randomCommand();
    SwimTeam.move(direction);
  }

  getSwimCommand();
  setInterval(swimTeamMove, 3000);


  /////////////////////////////////////////////////////////////////////
  // The ajax file uploader is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

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
