<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript basic - Exercises, Practice, Solution</title>
    <!-- styles & my scripts -->
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="jsfile.js"></script>
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>
<body>
    <h3>JavaScript basic
        <small class="text-muted">Exercises, Practice, Solution</small>
    </h3>
        <a href="https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php" class="btn btn-outline-dark active  " role="button" aria-pressed="true" target="_blank">Link: w3resource.com</a>

        <table class="table .table-responsive table-bordered text-center table-striped">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Output</th>
            </tr>
            </thead>
            <tbody >
<!-- task -->
                <tr>
                <th scope="row">1</th>
                <td>Write a JavaScript program to display the current day and time in the following format:<br>
                    Sample Output : Today is : Tuesday.<br>
                    Current time is : 10 PM : 30 : 38</td>
                <td id="task1"></td>
            </tr>
<!-- task -->
            <tr>
                <th scope="row">2</th>
                <td>Write a JavaScript program to print the contents of the current window.</td>
                <td class="align-middle"><button onclick="window.print()" type="button" class="btn btn-dark btn-sm" >Print this page</button></td>
            </tr>
<!-- task -->
            <tr>
                <th scope="row">3</th>
                <td >Write a JavaScript program to get the current date.
                    Expected Output :</br>
                    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy</td>
                <td id="task3"></td>
            </tr>
<!--task-->
            <tr>
                <th scope="row">4</th>
                <td>Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.</td>
                <td id="task4"></td>
            </tr>
<!--task-->
            <tr>
                <th scope="row">5</th>
                <td>Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.</td>
                <td id="task"></td>
            </tr>
<!--task-->
            <tr>
                <th scope="row">6</th>
                <td>Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.</td>
                <td id="task6">
                    <p>Type Year please</p>
                    <div class="input-group">
                        <input type="text" id="leapYear" pattern="{4}" maxlength="4" class="form-control" placeholder="YYYY" aria-label="" aria-describedby="basic-addon2">
                        <button type="button" class="btn btn-dark btn-sm" onclick="checkYear()">Checker</button>
                        <div class="input-group-append"></div>
                    </div>
                    <p id="againLeap"></p>
                </td>
            </tr>
            <script>
             
            </script>

<!--task-->
<!--
            <tr>
                <th scope="row">#</th>
                <td></td>
                <td id="task"></td>
            </tr>
-->
<!--task-->
<!--
            <tr>
                <th scope="row">#</th>
                <td></td>
                <td id="task"></td>
            </tr>
-->
<!--task-->
<!--
            <tr>
                <th scope="row">#</th>
                <td></td>
                <td id="task"></td>
            </tr>
-->
            </tbody>
        </table>
</body>
</html>