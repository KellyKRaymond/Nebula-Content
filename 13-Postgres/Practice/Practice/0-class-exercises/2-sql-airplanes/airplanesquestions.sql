-- // 1. What are the names and locations of all airports in Portugal? (name, city)

SELECT * FROM airport WHERE city = 'Portugal';

          1 | Sa Carneiro      | Porto     | Portugal
          3 | Portela          | Lisboa    | Portugal
          5 | Faro             | Faro      | Portugal
          2 | Madeira          | Funchal   | Portugal
          4 | Ponta Delgada    | S. Miguel | Portugal

-- // 2. What are the names of all planes of the DC-10 version? (name)

SELECT name FROM model JOIN plane ON model.modelcod = plane.modelcod WHERE version ='DC-10';

        Douglas  

-- // 3. How many engines does each plane have? (plane_name, number)

SELECT name, engines FROM plane JOIN model ON model.modelcod plane.modelcod;


-- // 4. How many flights with a 2 or 3 hour duration are there in the database? (number)

SELECT COUNT(*) FROM flight WHERE duration = '2' OR duration = '3'; 

        7 flights 


-- // 5. What plane models have a version starting with A3? (modelcod, version)

SELECT modelcod, version FROM model  WHERE version LIKE 'A3'; 


-- // 6. What is the code and duration of all flights. Sort the answer from longest to shortest flight. If two flights have the same duration, sort them by flight code from smallest to largest (flightcod, duration).

SELECT  flightcod, duration* FROM flight ORDER BY duration,flightcod asc;


-- // 7. Knowing that there are no direct flights from airport 1 (Porto) to airport 12 (London), which 2 legged flights can we use to travel between those airports? (flightcod1, flightcod2, intermediate_airport_code) Note: Use the airports codes (1 and 12) instead of the airport names in your query.

SELECT * FROM flight WHERE toairportcod = '12' LIMIT 1;
SELECT * FROM flight WHERE fromairportcod ='1' AND toairportcod = '3' LIMIT 1; 


-- // 8. How many airports are there in each country? Sort the answer in ascending order. (country, number)?

SELECT country, COUNT(*) FROM airport GROUP BY ASC; 

        5 - Portugal 
        2 - France
        2 - United Kingdom

-- // 9. What is the flight code, origin city and destination city of all flights in the database? Sort the answer by flight code. (flightcod, origin, destination)

SELECT flightcod, fromairportcod,toairportcod FROM flight ORDER BY flightcod ASC;


-- // 10. What are the flight codes of all flights from Porto to Lisboa. (flightcod)? Note: Your query should use the city names, not the airport codes.

SELECT * FROM airport;
SELECT * flightcod FROM flight WHERE to fromairportcod = 1 AND toairportcod = 3;

1009
1111


-- // 11. How many airports are there in each country? (country, number); show only countries with more than 2 airports.

SELECT country,COUNT(*) FROM airport GROUP BY country HAVING COUNT(*) > 2;

        5 - Portugal 

-- // 12. What country, or countries, has more airports and how many? (country, number)

SELECT country,COUNT(*) FROM airport GROUP BY country HAVING COUNT(*)  DESC LIMIT 1;

        5 - Portugal

-- // 13. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: You do not need to show models that do not have planes.

 SELECT COUNT(*) FROM model JOIN plane ON model.modelcod = plane.modelcod GROUP BY modelcod


-- // 14. How many actual planes are there for each plane model. Sort the result so that least frequent models appear last (make, version, number). Note: Also show models that do not have planes.

SELECT * FROM plane.name JOIN model.modelcod BY desc