-- // 1. What are the names and locations of all airports in Portugal? (name, city)

SELECT * FROM airport WHERE city = 'Portugal';

          1 | Sa Carneiro      | Porto     | Portugal
          3 | Portela          | Lisboa    | Portugal
          5 | Faro             | Faro      | Portugal
          2 | Madeira          | Funchal   | Portugal
          4 | Ponta Delgada    | S. Miguel | Portugal

-- // 2. What are the names of all planes of the DC-10 version? (name)

SELECT * FROM model WHERE version ='DC-10';

        Douglas  

-- // 3. How many engines does each plane have? (plane_name, number)

SELECT name, engines FROM plane model JOIN plane.name = model.engines;


-- // 4. How many flights with a 2 or 3 hour duration are there in the database? (number)

SELECT number FROM flight WHERE duration = '2' OR duration = '3'; 

        7 flights 


-- // 5. What plane models have a version starting with A3? (modelcod, version)

SELECT * FROM model JOIN plane = modelcod WHERE version = 'A3'; 


-- // 6. What is the code and duration of all flights. Sort the answer from longest to shortest flight. If two flights have the same duration, sort them by flight code from smallest to largest (flightcod, duration).

SELECT * FROM flight WHERE flightcod AND duration ORDER ascending;


-- // 7. Knowing that there are no direct flights from airport 1 (Porto) to airport 12 (London), which 2 legged flights can we use to travel between those airports? (flightcod1, flightcod2, intermediate_airport_code) Note: Use the airports codes (1 and 12) instead of the airport names in your query.

 **** GO BACK TO *** SELECT // two flights need 3 locations start from the back 


-- // 8. How many airports are there in each country? Sort the answer in ascending order. (country, number)?

SELECT countries FROM airport ORDER ascending; 

        5 - Portugal 
        2 - France
        2 - United Kingdom

-- // 9. What is the flight code, origin city and destination city of all flights in the database? Sort the answer by flight code. (flightcod, origin, destination)

SELECT flightcod, fromairportcod, toairportcod FROM flight; 


-- // 10. What are the flight codes of all flights from Porto to Lisboa. (flightcod)? Note: Your query should use the city names, not the airport codes.

SELECT flightcod FROM flight WHERE fromairportcod = 'Porto' AND toairportcod = 'Lisboa';


-- // 11. How many airports are there in each country? (country, number); show only countries with more than 2 airports.


SELECT country,COUNT(*) FROM airport GROUP BY country HAVING COUNT(*) > 2;

        5 - Portugal 

-- // 12. What country, or countries, has more airports and how many? (country, number)

SELECT * FROM airport 

        5 - Portugal

-- // 13. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: You do not need to show models that do not have planes.

SELECT * FROM model  


-- // 14. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: Also show models that do not have planes.

SELECT * FROM plane.name JOIN model.modelcod BY desc