![Node.js CI (test)](https://github.com/Jamikon/NordcloudProblem/workflows/Node.js%20CI%20(test)/badge.svg)

This is an interpretation of the problem proposed by Nordcloud to calculate the most suitabe 'link station'
for any given point.
This link station should have the highest possible power as per specifications.

Reach is calculated as a circle, not a square for given reach.


    Time complexity (all case)
        f(n, m) = O(n^m)
        
        where 
        n = LinkStations
        m = points to test
        
.