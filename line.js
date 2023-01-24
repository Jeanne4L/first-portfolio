var ctxToRight = document.getElementById("lineToRight").getContext("2d");
var ctxToLeft = document.getElementById("lineToLeft").getContext("2d");

// left to right
ctxToRight.beginPath();
ctxToRight.globalAlpha = 0.5;
ctxToRight.strokeStyle = 'rgb(255, 0, 136)';
ctxToRight.lineWidth = 5.045000;
ctxToRight.lineCap = 'round';
ctxToRight.lineJoin = 'round';
ctxToRight.miterLimit = 0;
ctxToRight.moveTo(385.042450, 378.639890);
ctxToRight.bezierCurveTo(385.704100, 334.474520, 386.365760, 290.309020, 325.573370, 254.825740);
ctxToRight.bezierCurveTo(264.780970, 219.342460, 142.542590, 192.545950, 81.668212, 157.560110);
ctxToRight.bezierCurveTo(20.793839, 122.574260, 21.290082, 79.401251, 21.786347, 36.226360);
ctxToRight.stroke();


// right to left
ctxToLeft.beginPath();
ctxToLeft.globalAlpha = 0.5;
ctxToLeft.strokeStyle = 'rgb(255, 0, 136)';
ctxToLeft.lineWidth = 5.045000;
ctxToLeft.lineCap = 'round';
ctxToLeft.lineJoin = 'round';
ctxToLeft.miterLimit = 0;
ctxToLeft.moveTo(21.835066, 378.639890);
ctxToLeft.bezierCurveTo(21.173413, 334.474520, 20.511758, 290.309020, 81.304153, 254.825740);
ctxToLeft.bezierCurveTo(142.096550, 219.342460, 264.334930, 192.545960, 325.209300, 157.560110);
ctxToLeft.bezierCurveTo(386.083680, 122.574270, 385.587430, 79.401252, 385.091170, 36.226360);
ctxToLeft.stroke();