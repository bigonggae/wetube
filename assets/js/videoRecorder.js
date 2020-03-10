const recorderContainer = document.getElementById("jsRecordConainer");
const recordBtn = document.getElementById("jsRecordBrn");
const videoPreview = document.getElementById("jsVideoPreview");

const startRecoding = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.mutes = true;
    videoPreview.play();
  } catch (error) {
    recordBtn.innerHTML = "Cant record";
    recordBtn.removeEventListener("click", startRecoding);
  }
};

function init() {
  recordBtn.addEventListener("click", startRecoding);
}

if (recorderContainer) {
  init();
}
