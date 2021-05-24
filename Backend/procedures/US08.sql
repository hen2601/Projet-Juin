create PROCEDURE "DBA"."US08"()
BEGIN 
  SELECT ville.codeP,ville,count (resultatTest)as casCovid
    from tbTest
    join tbpersonnes
    on tbTest.idTest = tbpersonnes.id
   join visite 
     on tbpersonnes.Id =visite.idPatient
    join ville
    on visite.codeP=ville.codeP
    where resultatTest=1 and expiration >=getdate()and dateVisite < getdate()
    group by ville.codeP,ville
    having casCovid > 1;
END