function[p] = dh(l1,l2,q1,q2)
    q1 = deg2rad(q1);
    q2 = deg2rad(q2);
    array=[0, 0, l1, 0;
           0, 0, l2, 0]
    r = SerialLink(array)
    r.plot([q1,q2])
    p = r.fkine([q1,q2])
end