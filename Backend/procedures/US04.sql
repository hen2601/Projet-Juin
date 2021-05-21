ALTER PROCEDURE "DBA"."US04"(in firstName VARCHAR(50), in lastName VARCHAR(50), in born DATE, in sex CHAR(1))
BEGIN
    INSERT INTO tbPersonnes (prenom, nom, dateDeNaissance, sexe)
    VALUES (firstName, lastName, born, sex)
END