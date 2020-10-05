<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desan card game</title>
    <style>
        body {
            padding: 0;
            margin: 0;
        }
        canvas {
            width: 100vw;
            height: 100vh;
            display: block;
        }
        @font-face{
            font-family: "textfont";
            src: url(`fonts/aAblasco.ttf);
        }
        .fontPreload {
            font-family:'textfont';
            position: absolute;
            left: -100px;
        }
    </style>


</head>
<body>
    <div class="fontPreload">.</div>
    <script src="js/StatisticPublisher.js"></script>
    <script src="js/Statistic.js"></script>
    <script src="js/phaser.min.js"></script>
    <script src="js/Card.js"></script>
    <script src="js/GameScene.js"></script>
    <script src="js/main.js"></script>


</body>
</html>