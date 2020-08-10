/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
     let n = matrix.length;        
        //上下翻转        
        for (let i = 0; i < n / 2; i ++){            
            let tmp = matrix[i];            
            matrix[i] = matrix[n - i - 1];            
            matrix[n - i - 1] = tmp;       
        }        
        //对角线翻转        
        for (let i = 0; i < n; i ++){            
            for (let j= i + 1; j < n; j++){                
                let tmp = matrix[i][j];                
                matrix[i][j] = matrix[j][i];                
                matrix[j][i] = tmp;            
            }       
        } 
};
// @lc code=end

