function sendSuccessMessage(message) {
  new Noty({
    text: message,
    theme: "sunset",
    type: "success",
    timeout: 5000, // [integer|boolean] delay for closing event in milliseconds. Set false for sticky notifications
    progressBar: true, // [boolean] - displays a progress bar
    animation: {
      open: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 450, y: 0 },
            to: { x: 0, y: 0 },
            easing: "bounce",
            duration: 1000,
            bounces: 4,
            stiffness: 3
          })
          .scale({
            from: { x: 1.2, y: 1 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 4,
            stiffness: 1
          })
          .scale({
            from: { x: 1, y: 1.2 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 6,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      },
      close: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 0, y: 0 },
            to: { x: 450, y: 0 },
            easing: "bounce",
            duration: 500,
            bounces: 4,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      }
    }
  }).show();
}
function sendErrorMessage(message) {
  new Noty({
    text: message,
    theme: "sunset",
    type: "error",
    timeout: 5000, // [integer|boolean] delay for closing event in milliseconds. Set false for sticky notifications
    progressBar: true, // [boolean] - displays a progress bar
    animation: {
      open: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 450, y: 0 },
            to: { x: 0, y: 0 },
            easing: "bounce",
            duration: 1000,
            bounces: 4,
            stiffness: 3
          })
          .scale({
            from: { x: 1.2, y: 1 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 4,
            stiffness: 1
          })
          .scale({
            from: { x: 1, y: 1.2 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 6,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      },
      close: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 0, y: 0 },
            to: { x: 450, y: 0 },
            easing: "bounce",
            duration: 500,
            bounces: 4,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      }
    }
  }).show();
}
function sendWarningMessage(message) {
  new Noty({
    text: message,
    theme: "sunset",
    type: "warning",
    timeout: 5000, // [integer|boolean] delay for closing event in milliseconds. Set false for sticky notifications
    progressBar: true, // [boolean] - displays a progress bar
    animation: {
      open: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 450, y: 0 },
            to: { x: 0, y: 0 },
            easing: "bounce",
            duration: 1000,
            bounces: 4,
            stiffness: 3
          })
          .scale({
            from: { x: 1.2, y: 1 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 4,
            stiffness: 1
          })
          .scale({
            from: { x: 1, y: 1.2 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 6,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      },
      close: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 0, y: 0 },
            to: { x: 450, y: 0 },
            easing: "bounce",
            duration: 500,
            bounces: 4,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      }
    }
  }).show();
}
function sendInfoMessage(message) {
  new Noty({
    text: message,
    theme: "sunset",
    type: "info",
    timeout: 5000, // [integer|boolean] delay for closing event in milliseconds. Set false for sticky notifications
    progressBar: true, // [boolean] - displays a progress bar
    animation: {
      open: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 450, y: 0 },
            to: { x: 0, y: 0 },
            easing: "bounce",
            duration: 1000,
            bounces: 4,
            stiffness: 3
          })
          .scale({
            from: { x: 1.2, y: 1 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 4,
            stiffness: 1
          })
          .scale({
            from: { x: 1, y: 1.2 },
            to: { x: 1, y: 1 },
            easing: "bounce",
            duration: 1000,
            delay: 100,
            bounces: 6,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      },
      close: function(promise) {
        var n = this;
        new Bounce()
          .translate({
            from: { x: 0, y: 0 },
            to: { x: 450, y: 0 },
            easing: "bounce",
            duration: 500,
            bounces: 4,
            stiffness: 1
          })
          .applyTo(n.barDom, {
            onComplete: function() {
              promise(function(resolve) {
                resolve();
              });
            }
          });
      }
    }
  }).show();
}

function sendAlert(title, message, type) {
  Swal.fire(title, message, type);
}
function sendLink(title, message, type, url) {
  Swal.fire({
    title: title,
    icon: type,
    html: `${message}\n<br><br><br><div style="display: flex; justify-content: center; text-align: center;" id="qrcode"></div>`,
    showCancelButton: true,
    confirmButtonText: `<i class="far fa-clipboard"></i>`,
    cancelButtonText: `<i class="fas fa-download"></i>`,
    reverseButtons: true
  }).then(result => {
    if (result.isConfirmed) {
      navigator.clipboard.writeText(url).then(
        function() {
          console.log("Async: Copying to clipboard was successful!");
          sendAlert(
            "Copied!",
            `Your link ${url} was copied to the clipboard`,
            "success"
          );
        },
        function(err) {
          console.error("Async: Could not copy text: ", err);
          sendAlert(
            "Error Copying Link",
            `Your link ${url} was NOT copied to the clipboard`,
            "error"
          );
          console.log(err);
        }
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      let dataUrl = document.querySelector("#qrcode").querySelector("canvas");
      console.log(dataUrl)
      downloadURI(dataUrl, "qrcode.png");
      sendAlert("Download Complete!", "QR Code Image Downloaded", "success");
    }
  });
  var qrcode = new QRCode("qrcode", {
    autoColor: true,
    logo:
      "https://cdn.glitch.com/a7e04da2-2c33-4944-b6a3-cd536c6424d9%2Fchrome_7Okpe8x56b.png?v=1601002327317",
    colorDark: "rgb(28,31,41)",
    colorLight: "rgb(50,218,245)",
    title: url, // 标题
    titleFont: "bold 12px Nunito, sans-serif", // 标题字体
    titleColor: "rgb(50,218,245)", // 标题颜色
    titleBgColor: "rgb(28,31,41)", // 标题背景
    titleHeight: 40, // 标题高度，包含 subTitle
    titleTop: 25
  });
  qrcode.makeCode(url).then(test=>{
    
  }
                           )
}
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  let img = uri.toDataURL()
  console.log(img)
  link.href = img;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}
