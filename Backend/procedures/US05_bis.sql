ALTER PROCEDURE "DBA"."US05_bis"( /* [IN | OUT | INOUT] nom_paramètre type_paramètre [DEFAULT valeur_par_défaut], ... */ )
/* RESULT( nom_colonne type_colonne, ... ) */
BEGIN
	

BEGIN
	SELECT Id, prenom, nom
    	FROM tbPers
	ORDER BY nom
END
