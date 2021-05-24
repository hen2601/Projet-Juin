create PROCEDURE "DBA"."US06"()

BEGIN
	SELECT count(resultatTest) AS CasCovidAct FROM tbTest
END