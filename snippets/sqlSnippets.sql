
-- FULLTEXT SEARCHING IN MYSQL

-- Pre-assumptions
-- search for keyword 'lagos QSM school' in 'school_info' table in fulltext-indexed columns school_name and school_location: FULLTEXT INDEX `ft_name_location` (`school_name`, `school_location`);
-- IMPORTANT: MATCH(col1, col2, coln, ...) function MUST match the number and position of the fulltext index. It won't work otherwise


-- MODES: IN NATURAL LANGUAGE, WITH QUERY EXPANSION and IN BOOLEAN

-- 1. NATURAL LANGUAGE MODE (default)
SELECT id, school_name, school_location 
FROM school_info 
WHERE MATCH (school_name, school_location) AGAINST ('lagos QSM school' IN NATURAL LANGUAGE MODE);



-- 2. QUERY EXPANSION MODE
-- helps widen the range of the search results. It automatically weights the search query against the most relevant terms. An expanded search begins by finding the records that contain a match for the query. Those records are then checked to identify the most relevant words. The database then runs another search, this time basing it on the relevant words instead of the original query. This usually results in more records being returned while maintaining an acceptable degree of relevance.
SELECT id, school_name, school_location
FROM school_info 
WHERE MATCH (school_name, school_location) AGAINST ('lagos QSM school' WITH QUERY EXPANSION);



-- 3. BOOLEAN MODE
-- This lets you include boolean modifiers in your query. You can use this mode when you need advanced control over the matching logic.
-- You can require a word to be present in each result by prefixing it with + (AND). Use - (OR) to exclude results which contain the word. Other operators can be used to match parts of words, create sub-expressions and make words reduce the relevance score. The latter can be helpful when masking “noise” terms. If you don’t specify an operator, it’s implied the word will be referenced in the query with OR.
-- The query below would surface records having 'lagos' where 'school' is not mentioned. Each result may or may not include the word 'QSM'.
SELECT id, school_name, school_location, MATCH (school_name, school_location) AGAINST ('+lagos QSM -school' IN BOOLEAN MODE) AS relevance
FROM school_info 
HAVING relevance > 0 
ORDER BY relevance DESC




-- Ordering by relevance (also applies to all modes)
-- the result will have a virtual column which will contain a relevance score, starting from 0, indicating how closely the record matched the search query.
-- NB: no need to repeat MATCH()...AGAINST() in WHERE clause. 
-- below query will return all records with those having no match with relevance 0
SELECT id, school_name, school_location, MATCH (school_name, school_location) AGAINST ('lagos QSM school' IN NATURAL LANGUAGE MODE) AS relevance
FROM school_info 
ORDER BY relevance DESC

-- order by relevance but remove non-zero score
SELECT id, school_name, school_location, MATCH (school_name, school_location) AGAINST ('lagos QSM school' IN NATURAL LANGUAGE MODE) AS relevance
FROM school_info 
HAVING relevance > 0 
ORDER BY relevance DESC