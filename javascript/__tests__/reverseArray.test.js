const ReverseArray=require('../reverseArray/index.js');
const testReverse=new ReverseArray();
describe('testing array reverse method',()=>{
  it('test first array',()=>{
    expect(testReverse.reverseArray([1,2,3,4,5,6])).toStrictEqual([6,5,4,3,2,1]);
  });
  it('testing empty array',()=>{
    expect(testReverse.reverseArray([])).toStrictEqual([]);
  });
  it('testing 2nd array',()=>{
    expect(testReverse.reverseArray([55,33,2,12,55,88,666])).toStrictEqual([666,88,55,12,2,33,55]);
  });
});


