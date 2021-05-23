create PROCEDURE "DBA"."US05"(in idT INTEGER, in dateT DATE, in expi DATE, in resul INTEGER)
BEGIN
	INSERT INTO  tbTest
        (idTest, dateTest , expiration , resultatTest)
        VALUES 
        (idT ,dateT ,expi ,resul)
END
