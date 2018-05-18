Array.prototype.myPop = function () {
    var removedElement = this[this.length - 1];
    this.length = this.length - 1;
    return removedElement;
}



Array.prototype.myPush = function (element) {
    this[this.length] = element;
    return this.length;
}


Array.prototype.myJoin = function (separator) {
    var resultString = "";
    if (separator === undefined) {
        separator = ",";
    }
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
            resultString += this[i];
        } else {
            resultString += this[i] + separator;
        }
    }
    return resultString;
}



Array.prototype.myFilter = function (callback) {
    var copyArr = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            copyArr[copyArr.length] = this[i];
        }
    }
    return copyArr;
}

Array.prototype.myMap = function (callback) {
    var copyArr = [];
    for (var i = 0; i < this.length; i++) {
        copyArr[i] = callback(this[i], i, this);
    }
    return copyArr;
}




Array.prototype.myCopy = function () {
    var copyArr = [];
    for (var i = 0; i < this.length; i++) {
        copyArr[i] = this[i];
    }
    return copyArr;
}

Array.prototype.myIndexOf = function (element, index) {
    index = index || 0;
    if (index < 0) {
        index = this.length + index;
    }
    for (var i = index; i < this.length; i++) {
        if (this[i] === element) {
            return i;
        }
    }
    return -1;
}

var arr = [1, 5, 7, 3, 1];



Array.prototype.myLastIndexOf = function (element, index) {
    index = index || this.length - 1;
    if (index < 0) {
        index = this.length + index;
    }
    for (var i = index; i >= 0; i--) {
        if (this[i] === element) {
            return i;
        }
    }
    return -1;
}

console.log(arr.myLastIndexOf(1, -2));