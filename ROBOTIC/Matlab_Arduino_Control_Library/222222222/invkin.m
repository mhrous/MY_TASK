function [ q ] = invkin(a1,a2,x,y)

dh = [0 0 a1 0
     0 0  a2 0];

r = SerialLink(dh);
transl(x,y,0)
q=r.ikine(transl(x,y,0),'mask',[1 1 0 0 0 0]);

r.plot(q);
q = rad2deg(q);

end

