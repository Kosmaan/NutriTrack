using System.Data;
using Infrastructure.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Persistence
{
    public class DatabaseContext: IDatabaseContext
    {
        private readonly string _databaseConnectionString;
        private SqlConnection _databaseConnection;
        private IDbTransaction? _databaseTransaction;

        public DatabaseContext(IConfiguration configuration)
        {

            var configurationConnectionString = configuration.GetConnectionString("Database");
            _databaseConnectionString = configurationConnectionString ?? throw new ArgumentNullException("Database is not provided in the configuration file.",nameof(configurationConnectionString));
            _databaseConnection = new SqlConnection(_databaseConnectionString);
        }

        public SqlConnection DatabaseConnection => _databaseConnection;

        public SqlConnection GetDbConnection()
        {
            return this._databaseConnection;
        }

        public IDbTransaction DatabaseTransaction => _databaseTransaction;
        public IDbTransaction GetDbTransaction()
        {
            return this._databaseTransaction;
        }

        public async Task OpenDatabaseConnection()
        {
            if (_databaseConnection.State != ConnectionState.Open)
            {
                await _databaseConnection.OpenAsync();
            }
        }

        public async Task CreateDatabaseTransaction()
        {
            await OpenDatabaseConnection();
            _databaseTransaction = _databaseConnection.BeginTransaction();
        }

        public void CommitDatabaseTransaction()
        {
            if (_databaseTransaction == null)
            {
                throw new InvalidOperationException("Database transaction was not opened.");
            }

            _databaseTransaction.Commit();
        }

        public void RollbackDatabaseTransaction()
        {
            if (_databaseTransaction == null)
            {
                throw new InvalidOperationException("Database transaction was not opened.");
            }

            _databaseTransaction.Rollback();
        }

        public void Dispose()
        {
            _databaseConnection.Dispose();
            _databaseTransaction?.Dispose();
        }
    }
}
