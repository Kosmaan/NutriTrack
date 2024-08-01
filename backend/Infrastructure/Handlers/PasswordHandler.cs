using System.Security.Cryptography;
using Application.Interfaces;

namespace Infrastructure.Handlers
{
    public class PasswordHandler : IPasswordHasher
    {
        private const int Salt = 128 / 8;
        private const int KeySize = 256 / 8;
        private const int Iterations = 10000;
        private static readonly HashAlgorithmName _hashAlgorithmName = HashAlgorithmName.SHA256;
        private const char Delimiter = '.';

        public string Hash(string password)
        {
            var salt = RandomNumberGenerator.GetBytes(Salt);
            var hash = Rfc2898DeriveBytes.Pbkdf2(password, salt, Iterations, _hashAlgorithmName, KeySize);

            return string.Join(Delimiter, Convert.ToBase64String(salt), Convert.ToBase64String(hash));
        }

        public bool Verify(string hashedPassword, string providedPassword)
        {
            var elements = hashedPassword.Split(Delimiter);
            var salt = Convert.FromBase64String(elements[0]);
            var hash = Convert.FromBase64String(elements[1]);

            var hashProvided = Rfc2898DeriveBytes.Pbkdf2(providedPassword, salt, Iterations, _hashAlgorithmName, KeySize);

            return CryptographicOperations.FixedTimeEquals(hash, hashProvided);
        }
    }
}
