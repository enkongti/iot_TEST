function f()
{
    return 'b'
}
function asdf(t1, t2=f())
{
    console.log(t1+t2);
}
asdf('a')

let test = (a, b) => console.log(a,b);

test(1,2);