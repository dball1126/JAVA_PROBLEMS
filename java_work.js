Function.prototype.myCall = function(obj, ...callArgs){
    return this.apply(obj, callArgs);
    //return this.bind(obj, callArgs)();
}

Function.prototype.myApply = function(obj, callArgs){
    return this.call(obj, ...callArgs);
}

Function.prototype.myBind = function(obj, ...bindArgs){
        let that = this;
    return function newFunc(...callArgs){
        return that.apply(obj, bindArgs.concat(callArgs));
    }
}

Function.prototype.myCurry = function(numArgs){
    let that = this;
    let thatArgs = [];
    return function _myCurry(ele) {
        thatArgs.push(ele);
        if(thatArgs.length < numArgs){
            return _myCurry;
        } else {
           return that(...thatArgs);
        }
    }
}

function myCurryZ(fn, ctx, numArgs){
    let argsArr = [];

    return function _myCurryZ(ele){
        argsArr.push(ele);
        if(argsArr.length < numArgs){
            return _myCurryZ;
        } else {
            return fn.call(ctx, ...argsArr);
        }
    };
}

function adder(q, w, e){
   return q * w * e;
}

console.log(adder.myCurry(3)(2)(2)(2));

Function.prototype.inerhit = function(parent){
    function Surrogate(){};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;


}

function mycall(fn, obj, ...callArgs){
    return fn.apply(obj, callArgs);
}

function myapply(fn, obj, callArgs){

    return fn.call(obj, ...callArgs);
}

function myBind(fn, obj, ...bindArgs){
    return (...callArgs) => {
        return fn.apply(obj, bindArgs.concat(callArgs));
    }
}

// function myCurry(fn, ctx, numArgs){
//     let num
// }

function myinherit(child, parent){
    function Surrogate(){};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
}


function digitalRoot(num){
    if(num < 10) return num;
    let digit = num % 10;
    let rem = Math.floor(digit / 10);
    return digitalRoot(digit + digitalRoot(rem));

}

function flatten(arr){

    let flatArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            flatArr = flatArr.concat(flatten(arr[i]));
        } else {
           flatArr.push(arr[i]);
        }

    }
    return flatArr;
}

Array.prototype.uniq = function(){
    let newArr = [];

    this.forEach(ele => {
        if(!newArr.includes(ele)) return newArr.push(ele);
    });
    return newArr;
};

Array.prototype.twoSum = function(){
    let pairs = [];

    for (let i = 0; i < this.length-1; i++) {
        for (let j = 1; j < this.length; j++) {
            let pair = [i, j];
                
            if(!pairs.includes(pair) && (this[i] + this[j]) === 0){
               pairs.push(pair);
               
            }
        }
    }
    return pairs;
};

Array.prototype.transpose = function(){

    let arr = [];

    for (let i = 0; i < this[0].length; i++) {
        let subarr = [];
        for (let j = 0; j < this.length; j++) {
            subarr.push(this[j][i]);
        
        }
       
        arr.push(subarr);
    }
    return arr;
};

Array.prototype.myEach = function(cb){
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        cb(ele);
    }
}

Array.prototype.myMap = function(cb){
    let newArr = [];
    this.forEach(ele => {
        return newArr.push(cb(ele));
    });

    return newArr;
}


Array.prototype.myReduce = function(cb, acc){
    let i = 0;
    if (acc === undefined){
        i = 1;
        acc = this[0];
    }

    this.slice(i).forEach(ele => {
        acc = cb(acc, ele);
    });

    return acc;
};

Array.prototype.bubblesort = function(comparator){
    if(!comparator){
        comparator = function(x, y){
            switch(true){
                case (x === y):
                    return 0;
                case (x < y):
                    return -1;
                case (x > y):
                    return 1;
            }
        };
    }

    let flag = false;

    while(flag === false){
        flag = true;
        for (let i = 0; i < this.length; i++) {
            if(comparator(this[i], this[i+1]) === 1){
                [this[i], this[i+1]] = [this[i+1], this[i]];
                flag = false;
            }
            
        }
    }
    return this;
};


String.prototype.substrings = function(){
    let subs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            let sub = this.slice(i, j+1);
            if(!subs.includes(sub) && sub !== ''){
                subs.push(sub);
            }
        }
    }
    return subs;
};

function range(start, end){
    if(end === start) return [end];

    let arr = [start];

    return arr.concat(range(start+1, end));
}


function sumRec(arr){
    if (arr.length === 1) return arr[0];

    let sum = arr[arr.length-1];

    return sum + sumRec(arr.slice(0, arr.length-1));
}

function exponent(base, exp){
    if(exp === 1) return base;

    return base * exponent(base, exp-1);
}

function exponent2(b, n){
    if(n === 1) return b;
    let even = exp(b, n / 2) ** 2;
    let odd = b * (exp(b, (n - 1) / 2) ** 2);
    let sum = 0;
    
    if(n % 2 === 0){
        sum = even;
    } else {
        sum = odd;
    }
    return sum;
}

function fibonacci(n){
    if(n === 1) return [0];
    if(n === 2) return [0, 1];

    let fibArr = fibonacci(n - 1);
   
    fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
   
    
    return fibArr;
}


function deepDup(arr){
    if(arr.length <= 1) return [arr[0]];
        
        let dupArr = [];

    for (let i = 0; i < arr.length; i++) {
            let subarr = [];
        if(Array.isArray(arr[i])){
            subarr.push(deepDup(arr[i]));
        } else {
            dupArr.push(arr[i]);
        }
        dupArr = dupArr.concat(subarr);
    }
    return dupArr;
}

Array.prototype.bsearch = function(target){
    if (this.length <= 0) return undefined;

    

    let mid = Math.floor(this.length / 2);
    let left = this.slice(0, mid);
    let right = this.slice(mid + 1);
   
    if(this[mid] === target){
        return mid;
    }  else if (target < this[mid]) {
        return left.bsearch(target);
    }   else {
        let rightSide = right.bsearch(target);
        if (rightSide === undefined) return undefined
        return (rightSide + (mid + 1));
    }
};

Array.prototype.myrotate = function(n){
    if(!n) n = 1;

    let size = this.length-1;

        if(n > 0){
    for (let i = 0; i < n; i++) {        
            this.push(this.shift());
        }
    } else if (n < 0){
        while(n < 0){
        this.unshift(this.pop());
        n++;
     }
    }
    return this;
}


Array.prototype.mergeSort = function(comparator){
    if(this.length <= 1) return this;

    if(!comparator){
        comparator = function(x, y){
        switch(true){
                case (x === y):
                    return 0;
                case (x < y):
                    return -1;
                case (x > y):
                    return 1;
            }
        }
    }

    let mid = Math.floor(this.length / 2);
    let left = this.slice(0, mid).mergeSort(comparator);
    let right = this.slice(mid).mergeSort(comparator);

    return left.merge(right, comparator);
}

Array.prototype.merge = function(right, comparator){
    let sorted = [];

    while(this.length && right.length){
        if(comparator(this[0], right[0]) <= 0){
            sorted.push(this.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return sorted.concat(this).concat(right);
}