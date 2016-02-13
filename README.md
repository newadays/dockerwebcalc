webcalc
=======
Web service for adding number using Docker.This is a build up to the first earlier web service - Using EC2 aws for Serving 
Dynamic Web Content The files are specified in each folder. Javascript in the _script file, CSS in the _css file, 
the Math library -PHPMathParser. calc.php and the HTML - index.php are in the main folder. The calculator takes in values and 
compute the values on the server then return the value of the result. Please map the port:80 on the host to the docker. e.g: 
docker run -it -p 80:80 web /startme.sh. The startme.sh is the configuration script file. You can use the webcalc like this
-e.g: 2+2 =Int(4). Please note that there's slight issue with the display of result.
Future Works
Expand the calculator to do a full BODMAS - Bracket, Division, Multiplication, Addition and Subtraction. Add additional features for scientific calculations such as cosine of an angle, logarithmic functions etc. Also, we can indicate additional attributes of the results e.g if it's a prime number for example, we can alert the user. In addition, make the display and buttons much wider and better. Finally, we need allow for memory function, stores value (cached results) temporarily for additional computations.
