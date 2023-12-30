document.addEventListener('DOMContentLoaded', function () {
  const podcast = document.getElementById('podcast');
  [].forEach.call(
    document.getElementsByClassName('timecode__timecode'),
    (timecode) => {
      timecode.addEventListener('click', (e) => {
        let a = timecode.innerText.split(':');
        let seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
        podcast.currentTime = seconds;
      });
    }
  );
});
