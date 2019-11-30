function[] = moveMotor(arduino ,channel , angle)

if channel == 1
    strcat('b',int2str(angle))
    fprintf(arduino,strcat('b',int2str(angle)))
    
elseif channel == 2
    fprintf(arduino,strcat('c',int2str(angle)))
end

end