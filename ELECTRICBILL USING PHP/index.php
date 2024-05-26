<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Electricity Bill Calculator</title>
    <!-- Include Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: white;
            margin: 0;
            padding: 0;
            background-image: url('bill.jpg'); /* Set the background image */
            background-size: cover; /* Cover the entire container */
            background-position: center;
        }
        .container {
            max-width: 600px;
            margin: 100px auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 80px;
            box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
            
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
        }
        form {
            margin-bottom: 20px;
        }
        label {
            font-weight: bold;
        }
        .form-control {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ccc;
            margin-bottom: 15px;
        }
        button[type="submit"] {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: none;
            background-color: #007bff;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
        }
        button[type="submit"]:hover {
            background-color: #0056b3;
        }
        h2 {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    
    <div class="container">
    
        <br>
        <h1>Electricity Bill Calculator</h1>
        <form method="post">
            <div class="form-group">
                <label for="units_consumed">Enter No Of  Units Consumed: Eg( 1-100 )</label>
                <input type="number" class="form-control" id="units_consumed" name="units_consumed" required>
            </div>
            <br>
            <button type="submit" class="btn btn-primary" name="calculate">Calculate</button>
        </form>
        <?php
        if (isset($_POST['calculate'])) {
            $units_consumed = $_POST['units_consumed'];
            $bill_amount = calculateBillAmount($units_consumed);
            echo "<h2>Your Bill Amount is - <br><br>  $bill_amount  ₹ </h2>";
        }

        function calculateBillAmount($units_consumed) {
            $rates = array(
                array(50, 3.50),
                array(100, 4.00),
                array(100, 5.20),
                array(PHP_INT_MAX, 6.50)
            );
            $bill_amount = 0;
            $remaining_units = $units_consumed;

            foreach ($rates as $rate) {
                if ($remaining_units <= 0) {
                    break;
                }
                $limit = $rate[0];
                $price = $rate[1];
                if ($remaining_units > $limit) {
                    $bill_amount += $limit * $price;
                    $remaining_units -= $limit;
                } else {
                    $bill_amount += $remaining_units * $price;
                    $remaining_units = 0;
                }
            }

            return $bill_amount;
        }
        ?>
    </div>
</body>
</html>
