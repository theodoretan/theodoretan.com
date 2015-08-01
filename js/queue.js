function Queue() {
    var queue = [];

    this.getlen = function() {
        return queue.length;
    }

    this.insert = function(value) {
        queue.push(value);
    }


    this.remove = function() {
        if (queue.length === 0) {
            return false;
        } else {
            return queue.shift();
        }
    }

    this.peek = function() {
        if (queue.length === 0) {
            return false;
        } else {
            return queue[0];
        }
    }
}
