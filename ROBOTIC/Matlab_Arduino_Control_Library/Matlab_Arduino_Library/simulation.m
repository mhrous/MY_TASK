function[p] = simulation(name,l1,l2,q1,q2)
    q1 = q1 + 135
    q2 = q2 + 135
    move(name,q1,q2)
    p=dh(l1,l2,q1,q2)
    
 
end