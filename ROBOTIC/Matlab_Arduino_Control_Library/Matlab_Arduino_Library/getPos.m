function[pos] = getPos(a1,a2,q1,q2)
    q1 = deg2rad(q1);
    q2 = deg2rad(q2);
    tem = trchain2("R(q1) Tx(a1) R(q2) Tx(a2)",[q1 q2]);
    pos = tem(1:2,3);
end