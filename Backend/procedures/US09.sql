create PROCEDURE "DBA"."US09"(in idP  INTEGER, in code integer, in datev DATE)
BEGIN
	insert into visite
    (idPatient,codeP,dateVisite)
    VALUES 
    (idP,code,datev)
END