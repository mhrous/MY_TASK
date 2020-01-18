
%a= Arduino1('COM5')

s = invkin(5,10,10);
q1=s(1);
q2=s(2);

moveMotor(a,1,q1);
pause(5)
moveMotor(a,2,q2);


s2 = invkin(5,-10,-10);
q1=s2(1);
q2=s2(2);


moveMotor(a,1,q1);
pause(5)
moveMotor(a,2,q2);



s3 = invkin(5,10,10);
q1=s3(1);
q2=s3(2);
moveMotor(a,1,q1);
pause(5)
moveMotor(a,2,q2);


