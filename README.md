# How to Run
## Install dependencies
 
```
yarn 
```
or
```
npm install
```
## Run the server
```
yarn start
```
or
```
npm start
```

## Send request

strategy Options: "Base", "CustomOne", "CustomTwo"

```
curl --request POST \
  --url http://localhost:8080/substitute \
  --header 'content-type: application/json' \
  --data '{
	"strategy": "Base",
	"values": {
		"a": true,
		"b": true,
		"c": false,
		"d": 2,
		"e": 2,
		"f": 2
	}
}'
```

# Testing
```
yarn test
```
or
```
npm test
```

# Decisions approaches
## Clean architecture
I followed the principles of clean architecture to encapsulate the business logic from any type of framework. Once the business login was finished, I decided to use express to expose the service.

## TDD
I used TDD during development
1. Add a test
2. Run all tests and see if the new test fails
3. Write the code
4. Run tests
5. Refactor code

## Typescript
Because this test is oriented to a frontend position in which knowledge about TypeScrip and Node is required. I had to solve the exercise using TypeScript

If I would had to choose a language freely. I would have gone for a strongly typed language like Java or Go. These languages would speed up the development process (Better refactor tools) and would give robustness to the code

## Express
Thanks to Clean Architecture. I was able to choose which technology to use once I finished writing the business logic. I chose to expose a service with express since it is the easiest and fastest for a TestTask

## Object-oriented programming
I believe that I have respected the SOLID principles at all times. There are times where one principle can overlap the other. I am open to discuss these topics to exchange opinions and continue to improve

## Quality
For code quality tests are available. It would be necessary to integrate a Code Coverage tool like Jacoco. I did not do it due to lack of time but it should not be very expensive, the tests are already available.

All classes are tested with Unit Tests and there is an integration test to test DefaultSubstitutorFactory

## Things to add and improve
The API could be documented with swagger or some other tool that follows the OpenAPI specification

# Assignment
You are given a number of inputs and corresponding expressions for
substitutions between inputs and outputs, and the expected output.
The algorithm should be implemented using any approaches/ techniques that
you find appropriate.
Assignment can be implemented in any language of your choice, and you can
use any framework / libraries that you wish. It’s up to you to decide how to
control quality of implementation and what design/ approach to pick/ invent.
Possible inputs
## Following variables are acceptable as input:
|Input|Type| 
|---|---| 
|A  |bool   |
|B  |bool   |
|C  |bool   |
|D  |float  |
|E  |int    |
|F  |int    |
## Expected outputs
The outputs are defined as:
|Output|Type|
|---|---|
|H  | one of these predefined values [M,P,T] (e.g. H could be equal to either of 3 values: M, P or T)
|K  | floating point number (e.g. float, decimal)|
## Substitution expressions
The assignment consists of base expressions set and two custom set of
expressions that override / extend the base rules.
### Base
A && B && !C => H = M

A && B && C => H = P

!A && B && C => H = T

[other] => [error] 

H = M => K = D + (D * E / 10)

H = P => K = D + (D * (E - F) / 25.5)

H = T => K = D - (D * F / 30)

### Custom 1
H = P => K = 2 * D + (D * E / 100)
### Custom 2
A && B && !C => H = T

A && !B && C => H = M

H = M => K = F + D + (D * E / 100)

### Result
Assignment could be implemented in a way of backend application and be
exposed in a simple REST API or as browser based application and run within the
browser with or without communication to the backend. Shape of
implementation is up to you.
