const not = (l, b , tl , tb , ntb) => {
    const not  = (l*b)/(tl*tb);
    const NumberOfboxes = not/ntb;
    return NumberOfboxes;

};
console.log(math.ceil(not (20,30,2,4,10)));


