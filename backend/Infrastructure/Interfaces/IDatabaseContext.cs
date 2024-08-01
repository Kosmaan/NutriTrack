using System.Data;
using Microsoft.Data.SqlClient;

namespace Infrastructure.Interfaces
{
    public interface IDatabaseContext
    {
        public SqlConnection GetDbConnection();
        public IDbTransaction GetDbTransaction();

        public Task OpenDatabaseConnection();
        public Task CreateDatabaseTransaction();
        public void CommitDatabaseTransaction();
        public void RollbackDatabaseTransaction();
    }
}
