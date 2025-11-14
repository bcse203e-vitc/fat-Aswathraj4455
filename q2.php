<?php
function insideOut($arr) {
    $n = count($arr);

    if ($n % 2 === 0) {
        $half = $n / 2;

        $temp1 = $arr[$half - 1];
        $arr[$half - 1] = $arr[$n - 1];
        $arr[$n - 1] = $arr[$half];

        $arr[$half] = $temp1;
    }

    return $arr;
}

$numericArray = array_filter($numericArray, 'is_int');
?>

<head>
    <title>Inside Out Array </title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            line-height: 1.6;
        }
        h2 {
            color: #333;
        }
        .array-output {
            font-size: 16px;
            color: #2c3e50;
         
        }
    </style>
</head>
<body>

<h2>Numeric Array Output:</h2>
<div class="array-output">
    <?php
    $result = insideOut($numericArray);
    echo implode(" ", $result);
    ?>
</div>

<?php
$stringArray = array_filter($stringArray, 'is_string');
?>

<h2>String Array Output:</h2>
<div class="array-output">
    <?php
    $result = insideOut($stringArray);
    echo implode(" ", $result);
    ?>
</div>

</body>
</html>
