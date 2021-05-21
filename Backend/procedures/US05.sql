ALTER PROCEDURE "DBA"."US05"(in resul VARCHAR(20), in test DATE, in exp DATE)
BEGIN
    SELECT Id, prenom, nom
    FROM tbpersonnes;
    UPDATE tbTests
    SET resultat = resul, dateTest = test, expiration = exp, tbTests.Id = tbPersonnes.Id
    WHERE Id IS NULL;
END