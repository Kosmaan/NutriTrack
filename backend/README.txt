Following script will retrieve the db connection string:

declare @dbName nvarchar(500) = 'CentricSummerPractice';

select
    'data source=' + @@servername +
    ';initial catalog=' + @dbName +
    case type_desc
        when 'WINDOWS_LOGIN' 
            then ';trusted_connection=true'
        else
            ';user id=' + suser_name() + ';password=<<YourPassword>>'
    end
	+';TrustServerCertificate=True;'
    as ConnectionString
from sys.server_principals
where name = suser_name()

DbUp documentation: 
https://dbup.readthedocs.io/en/latest/
DO NOT: have the project name = DbUp. Have it something else eg: DbUpgrader. Reason: throws an error because the nugget has the same name. Documentaion suggests DbUpDemo but does not explain why.
