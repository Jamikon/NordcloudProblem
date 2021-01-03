![Tests](https://github.com/Jamikon/NordcloudProblem/workflows/Node.js%20CI%20(test)/badge.svg)

# This is a possible solution to the tech problem proposed by Nordcloud.

# Installation

## Prerequirements
* Node.JS (>=v14.5.0) installed (tested on v14.5.0)
* NPM (>=6.14.5) installed (tested on 6.14.5)
* copy of git repo (`https://github.com/Jamikon/NordcloudProblem)

## Installing
run `npm install` and wait

# Running the program
## Basic
There are a couple ways to run the program.
To get the required outpot logged to the console, simply use `npm start` and it will log
the predefined Points and LinkStations as per requirements. Try `npm run start` if the previous 
command is not working.

## Testing
use `npm test` or `npm run test` to run all tests. Testing is done with the Jest package.

## Dev
as of right now, all instances run with `npm start` will default to NODE_ENV=dev for easier future
integration as an API endpoint on AWS Lambda.

## Prod
not available at the moment. Will be added during API endpoint integration.

# Time complexity
## All cases
Regardless of input, it will always perform n^m work

    Time complexity (all case)
        f(n, m) = O(n^m)
        
        where 
        n = LinkStations
        m = points to test
        
### Afterthoughts
the runtime is ass, especially after all tests (which dont contribute to
complexity, but still increase total runtime, due to extra x * n^m work).
An option is to use parallel computing, but JS is even more ass at that 
and testing during development yielded no benefit for running in parallel in both small
and large inputs.
No testing done on AWS Lambda though. Lambda might be more optimised for parallel.
Though the small amount of work done on each thread is very little so the benefit
will be very low.

Perhaps a complex algorithm that splits the work into x * n[y...z]^m threads will yield
better results than a simple n*m thread split due to more parallel work done on each thread.
Though the time complexity still remains the same,
unless the core algorithm is changed to something faster.