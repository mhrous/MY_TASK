q1 = invkin(14,1);
q2 = invkin(0,19);
q3 = invkin(-14,1);

%q1 = [135 - q1(1) ,135 - q1(2)]
%q2 = [135 - q2(1) ,135 - q2(2)]
%q3 = [135 - q3(1) ,135 - q3(2)]


move('COM7',q1(1),q1(2))
pause(5)
move('COM7',q2(1),q2(2))
pause(5)
move('COM7',q3(1),q3(2))
pause(5)

    


