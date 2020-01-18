function[] = move(name,q1,q2)
    a = Arduino1(name);
    moveMotor(a,1,q1)
    pause(5)
    moveMotor(a,2,q2)
    close_arduino(a)
end