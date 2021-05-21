ALTER PROCEDURE "DBA"."US03"()
BEGIN 
    --

        SELECT id, prenom, nom, dateDeNaissance,testResult,expiration,dateTest
        FROM tbpersonnes
       left join tbTest
    --
END