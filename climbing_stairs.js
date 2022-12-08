var climbStairs = function (n) {
    {
        var total = 1;

        for (var i = 2; i <= n; i++) {
            total += climbStairs(n - i);
        }

        return total;
    }

};