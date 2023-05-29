const restart_1_4 = document.querySelector(".restart_1_4");
const fun_video_iframe = document.querySelector(".fun_video_iframe");

const fun_video_src_list = [
  "https://www.youtube.com/embed/_fd_hwSm9zI",
  "https://www.youtube.com/embed/AC0alNuhHMM",
  "https://www.youtube.com/embed/EOCZYxmi7ho",
];

let pre_number = 0;

function restart_youtube_1_4() {
  change_random_number();
  fun_video_iframe.src = fun_video_src_list[pre_number];
}

function change_random_number() {
  const random_number = Math.floor(Math.random() * 3);
  if (random_number == pre_number) {
    change_random_number();
  } else {
    pre_number = random_number;
  }
}

restart_1_4.addEventListener("click", restart_youtube_1_4);