function abs(a)
{
    if (a > 0)
        return a;
    return -a;
}

function conf(board, row, col)
{
    let i = -1;
    while (++i < row)
    {
        if (board[i] === col)
            return (false);
        else
            if (abs(board[i] - col) === abs(i - row))
                return (false);
    }
    return (true);
}

function solve(board, row, n)
{
    let solve_num = 0;
    let col = -1;
    while (++col < n)
    {
        if (conf(board, row, col))
        {
            board[row] = col;
            if (row === n - 1)
                solve_num++;
            else
                solve_num += solve(board, row + 1, n);
        }
    }
    return solve_num;
}

function solution(n) {
    var answer = 0;
    
    let board = new Array(n);
    for (let i = 0; i < n ; i++) board[i] = -1;

    return solve(board, 0, n);
}