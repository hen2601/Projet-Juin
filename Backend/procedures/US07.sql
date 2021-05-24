create PROCEDURE "DBA"."US07"()

BEGIN
	SELECT count(resultatTest) AS testRecent FROM tbTest
    where expiration >=getdate()
END