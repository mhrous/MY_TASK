function  [q]  = invkin(x,y)

dh = [0 0 10 0
     0 0  9 0];

r = SerialLink(dh);
q = r.ikine(transl(x,y,0),'mask',[1 1 0 0 0 0]);

r.plot(q);
q = rad2deg(q);

end

